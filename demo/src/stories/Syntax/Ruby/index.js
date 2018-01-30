import React from 'react'
import ruby from 'react-syntax-highlighter/dist/languages/hljs/ruby'
import atomOneLight from 'react-syntax-highlighter/dist/styles/hljs/atom-one-light'
import Smackdown from '../../../../../src'
import md from './demo.md'

const syntax = {
  languages: [{ name: 'ruby', syntax: ruby }],
  showLineNumbers: true,
  lineNumberStyle: { opacity: 0.5 },
  theme: atomOneLight,
}

const rubyDemo = () => (
  <Smackdown
    source={md}
    syntax={syntax}
  />
)

export default rubyDemo
