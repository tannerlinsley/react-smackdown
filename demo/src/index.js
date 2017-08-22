import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import ReactShow from 'react-show'
import stories from './stories'

injectGlobal`
  * { box-sizing: border-box; }
  html, body, #demo {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`

class Demo extends Component {
  render() {
    return (
      <ReactShow stories={stories} />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
