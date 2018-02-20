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
  const Code = props => <SyntaxRenderer {...props} {...syntax} />

  const finalRenderers = {
    code: {
      component: Code,
    },
    ...renderers,
  }

  const transform = (node, index) => {
    // Transform any code usin the syntax renderer
    if (node.type === 'tag' && node.name === 'code') {
      convertNodeToElement(node, index, transform)
      return React.createElement(
        Code,
        {
          className: node.attribs.class, // Its a shame these aren't react attrs :(
          key: index,
        },
        node.children && node.children[0] && node.children[0].data ? node.children[0].data : null
      )
    }
    // Transform any component renderers as react components
    if (node.type === 'tag' && finalRenderers[node.name]) {
      return React.createElement(
        finalRenderers[node.name],
        generatePropsFromAttributes(node.attribs, index),
        processNodes(node.children, transform)
      )
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
