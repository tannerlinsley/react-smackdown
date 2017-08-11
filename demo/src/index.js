import React, { Component } from 'react'
import { render } from 'react-dom'
import { javascript, ruby, sql, elixir, json } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../src'
import md from './demo.md'
// import 'highlight.js/styles/atom-one-light.css'
// import '../../src/smackdown.css'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript },
    { name: 'ruby', syntax: ruby },
    { name: 'sql', syntax: sql },
    { name: 'elixir', syntax: elixir },
    { name: 'json', syntax: json }
  ],
  showLineNumbers: true,
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
