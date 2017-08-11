import React from 'react'
import MarkdownRender from 'markdown-to-jsx'
import LowlightRenderer from './LowlightRenderer'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options
const Markdown = ({
  source,
  languages = ['javascript', 'shell', 'json', 'css'],
  theme = 'light'
}) => (
  <MarkdownRender
    options={{
      overrides: {
        code: {
          component: LowlightRenderer(languages)
        }
      }
    }}
  >
    {source}
  </MarkdownRender>
)

export default Markdown
