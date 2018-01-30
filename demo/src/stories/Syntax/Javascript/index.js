import React from 'react'
import { Story, Demo } from 'react-story'
import { javascript } from 'react-syntax-highlighter/dist/languages/hljs'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles/hljs'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight,
}


const javascriptDemo = () => (
  <Story>
    <Demo
      name="javascript Demo"
      desc="Syntax highlighting for javascript"
      code={code}
    >
      <Markdown
        source={md}
        syntax={syntax}
      />
    </Demo>
  </Story>
)

export default {
  name: 'Javascript',
  component: javascriptDemo
}
