import React from 'react'
import MarkdownRender, { compiler } from 'markdown-to-jsx'
import CodeRenderer from './CodeRenderer'
import Wrapper from './Wrapper'

const Markdown = ({ source }) => {
  const content = (
    <MarkdownRender
      options={{
        overrides: {
          code: {
            component: CodeRenderer
          }
        }
      }}
    >
      {source}
    </MarkdownRender>
  )

  return (
    <Wrapper className="smackdown markdown">
      {content}
    </Wrapper>
  )
}

export default Markdown
