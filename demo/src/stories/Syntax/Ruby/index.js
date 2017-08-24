import React from 'react'
import { Story, Demo } from 'react-story'
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
  <Story>
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
  </Story>
)

export default {
  name: 'Ruby',
  component: rubyDemo
}
