import React from 'react'
import { Demo } from 'react-show'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneDark,
}


const AtomOneDarkDemo = () => (
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
)

export default {
  name: 'Atom One Dark',
  component: AtomOneDarkDemo
}
