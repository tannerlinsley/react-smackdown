import React, { Component } from 'react'
import { render } from 'react-dom'

import RubyStory from './stories/Syntax/Ruby'
import HeaderStory from './stories/Overrides/Header'

class Demo extends Component {
  render () {
    return (
      <div>
        <h2>Ruby Example:</h2>
        <RubyStory />

        <h2>Override Header Example</h2>
        <HeaderStory />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
