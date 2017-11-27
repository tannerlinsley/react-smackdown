import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import ReactHtmlParser, {
  convertNodeToElement,
  processNodes
} from 'react-html-parser'
import generatePropsFromAttributes from 'react-html-parser/lib/utils/generatePropsFromAttributes'
//
import SyntaxRenderer from './SyntaxRenderer'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options
const Markdown = ({ source, components = {}, syntax = {}, ...rest }) => {
  // Get the syntax renderer
  const Code = SyntaxRenderer(syntax)

  const transform = (node, index) => {
    console.log(node)
    // Transform any code usin the syntax renderer
    if (node.type === 'tag' && node.name === 'code') {
      const el = convertNodeToElement(node, index, transform)
      return React.createElement(
        Code,
        {
          className: node.attribs.class, // Its a shame these aren't react attrs :(
          key: index
        },
        node.children[0].data
      )
    }
    // Transform any component overrides as react components
    if (node.type === 'tag' && components[node.name]) {
      return React.createElement(
        components[node.name],
        {...rest, ...generatePropsFromAttributes(node.attribs, index)},
        processNodes(node.children, transform)
      )
    }
  }

  return (
    <div {...rest}>
      {ReactHtmlParser(marked(source), {
        transform: transform
      })}
    </div>
  )
}

Markdown.propTypes = {
  /** The markdown to be rendered */
  source: PropTypes.string.isRequired,
  /** The syntax configuration */
  syntax: PropTypes.object,
  /** Markdown component overrides */
  overrides: PropTypes.object
}

export default Markdown
