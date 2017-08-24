import React from 'react'
import { Story, Demo } from 'react-story'
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


const atomOneLightDemo = () => (
  <Story>
    <Demo
      name="Atom One Dark Demo"
      desc="Atom One Dark theme example"
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
  name: 'Atom One Light',
  component: atomOneLightDemo
}
