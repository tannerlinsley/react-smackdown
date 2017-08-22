import React from 'react'
import { Demo } from 'react-show'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
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
)

export default {
  name: 'Javascript',
  component: javascriptDemo
}
