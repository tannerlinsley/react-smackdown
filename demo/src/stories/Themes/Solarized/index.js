import React from 'react'
import { Story, Demo } from 'react-story'
import { ruby } from 'react-syntax-highlighter/dist/languages'
import { solarizedDark } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const syntax = {
  languages: [
    { name: 'ruby', syntax: ruby }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: solarizedDark,
}


const solarizedDemo = () => (
  <Story>
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
  </Story>
)

export default {
  name: 'Solarized',
  component: solarizedDemo
}
