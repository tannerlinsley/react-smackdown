import React, { Component } from 'react'
import { render } from 'react-dom'
import { javascript, ruby, sql, elixir, json } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../src'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript },
    { name: 'ruby', syntax: ruby },
    { name: 'sql', syntax: sql },
    { name: 'elixir', syntax: elixir },
    { name: 'json', syntax: json }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight
}

class Demo extends Component {
  render() {
    return (
      <Markdown
        source={md}
        syntax={syntax}
      />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
