import React from 'react'
import { ruby } from 'react-syntax-highlighter/dist/languages'
import { solarizedDark } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'ruby', syntax: ruby }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: solarizedDark,
}

export default () => (
  <Markdown
    source={md}
    syntax={syntax}
  />
)
