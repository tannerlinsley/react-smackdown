import React from 'react'
import { Demo } from 'react-show'
import { ruby } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'ruby', syntax: ruby }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight,
}


const rubyDemo = () => (
  <Demo
    name="Ruby Demo"
    desc="Syntax highlighting for ruby"
    code={code}
  >
    <Markdown
      source={md}
      syntax={syntax}
    />
  </Demo>
)

export default {
  name: 'Ruby',
  component: rubyDemo
}
