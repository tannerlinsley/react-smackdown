import React, {Component} from 'react'
import {render} from 'react-dom'
import Markdown from '../../src'
import md from './demo.md'

class Demo extends Component {
  render() {
    return (
      <div>
        <Markdown source={md} />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
