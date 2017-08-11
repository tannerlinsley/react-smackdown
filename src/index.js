import React from 'react'
import MarkdownRender from 'markdown-to-jsx'
import SyntaxRenderer from './SyntaxRenderer'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options
const Markdown = ({
  source,
  overrides,
  syntax
}) => (
  <MarkdownRender
    options={{
      overrides: {
        ...overrides,
        code: {
          component: SyntaxRenderer(syntax)
        }
      }
    }}
  >
    {source}
  </MarkdownRender>
)

export default Markdown
