import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser, { convertNodeToElement, processNodes } from 'react-html-parser'
import generatePropsFromAttributes from 'react-html-parser/lib/utils/generatePropsFromAttributes'
//
import SyntaxRenderer from './SyntaxRenderer'
import compiler from './compiler'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options

// 1. Syntax Highlighting langs, themes, tree-shaking
// 2. Github flavor - Override markdown components
// 3. Front Matter extractor
// 4. Menu Builder

export default function Smackdown ({
  source,
  renderers = {},
  syntax = {},
  style,
  className,
  ...rest
}) {
  // Get the syntax renderer
  // console.log(syntax)

  const Syntax = props => <SyntaxRenderer {...props} {...syntax} />

  const transform = (node, index) => {
    // Transform any component renderers as react components
    if (node.type === 'tag' && renderers[node.name]) {
      const Component = renderers[node.name]
      const props = generatePropsFromAttributes(node.attribs, index)
      const children = processNodes(node.children, transform)
      return React.createElement(Component, props, children)
    }
    // Transform any code usin the syntax renderer
    if (node.type === 'tag' && node.name === 'pre') {
      if (node.children && node.children.length === 1 && node.children[0].name === 'code') {
        node = node.children[0]
        convertNodeToElement(node, index, transform)
        const props = {
          ...generatePropsFromAttributes(node.attribs, index),
          isInPre: node.parent && node.parent.name === 'pre',
        }
        return React.createElement(
          Syntax,
          props,
          node.children && node.children[0] && node.children[0].data ? node.children[0].data : null
        )
      }
    }
  }

  return (
    <div {...{ style, className }}>
      {ReactHtmlParser(compiler.makeHtml(source), {
        transform,
        ...rest,
      })}
    </div>
  )
}

Smackdown.propTypes = {
  /** The markdown to be rendered */
  source: PropTypes.string.isRequired,
  /** The syntax configuration */
  syntax: PropTypes.object,
  /** Markdown component overrides */
  overrides: PropTypes.object,
}
