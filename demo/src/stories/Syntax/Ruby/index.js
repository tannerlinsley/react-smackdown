import React from 'react'
import { ruby } from '../../../../../src/languages'
import { atomOneLight } from '../../../../../src/themes'
import Markdown from '../../../../../src'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'ruby', syntax: ruby }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight
}

export default () => (
  <Markdown
    source={md}
    syntax={syntax}
  />
)
