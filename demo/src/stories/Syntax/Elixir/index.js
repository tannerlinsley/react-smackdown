import React from 'react'
import { Demo } from 'react-show'
import { elixir } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'elixir', syntax: elixir }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight,
}


const ElixirDemo = () => (
  <Demo
    name="Elixir Demo"
    desc="Syntax highlighting for elixir"
    code={code}
  >
    <Markdown
      source={md}
      syntax={syntax}
    />
  </Demo>
)

export default {
  name: 'Elixir',
  component: ElixirDemo
}
