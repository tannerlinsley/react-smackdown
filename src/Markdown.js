import React from 'react'
import PropTypes from 'prop-types'
import MarkdownToJSX from 'markdown-to-jsx'
import SyntaxRenderer from './SyntaxRenderer'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options

// 1. Syntax Highlighting langs, themes, tree-shaking
// 2. Github flavor - Override markdown components
// 3. Front Matter extractor
// 4. Menu Builder

const Markdown = ({ source, renderers = {}, syntax = {}, ...rest }) => {
  // Get the syntax renderer
  // console.log(syntax)
  const Code = props => (
    <SyntaxRenderer {...props} languages={syntax.languages} theme={syntax.theme} />
  )

  const markdownOptions = {
    overrides: {
      code: {
        component: Code,
      },
      ...renderers,
    },
    ...rest,
  }

  return (
    <div className="react-smackdown">
      <MarkdownToJSX options={markdownOptions}>{source}</MarkdownToJSX>
    </div>
  )
}

Markdown.propTypes = {
  /** The markdown to be rendered */
  source: PropTypes.string.isRequired,
  /** The syntax configuration */
  syntax: PropTypes.object,
  /** Markdown component overrides */
  overrides: PropTypes.object,
}

export default Markdown
