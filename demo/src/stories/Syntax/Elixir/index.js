import React from 'react'
import { Story, Demo } from 'react-story'
import { elixir } from 'react-syntax-highlighter/dist/languages/hljs'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles/hljs'
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
  <Story>
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
  </Story>
)

export default {
  name: 'Elixir',
  component: ElixirDemo
}
