import React, {Component} from 'react'
import {render} from 'react-dom'
import Markdown from '../../src'
import md from './demo.md'
import 'highlight.js/styles/atom-one-light.css'
import '../../src/smackdown.css'


class Demo extends Component {
  render() {
    return (
      <Markdown
        source={md}
        languages={['ruby', 'sql', 'javascript', 'elixir', 'json']}
      />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
