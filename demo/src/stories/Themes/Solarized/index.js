import React from 'react'
import { Demo } from 'react-show'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { solarizedDark } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: solarizedDark,
}


const solarizedDemo = () => (
  <Demo
    name="Solarized Demo"
    desc="Solarized theme example"
    code={code}
  >
    <Markdown
      source={md}
      syntax={syntax}
    />
  </Demo>
)

export default {
  name: 'Solarized',
  component: solarizedDemo
}
