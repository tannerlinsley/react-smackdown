import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
// import ReactStory from 'react-story'
// import stories from './stories'

import RubyStory from './stories/Syntax/Ruby'

injectGlobal`
  * { box-sizing: border-box; }
  html, body, #demo {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`

class Demo extends Component {
  render () {
    return <RubyStory />
  }
}

// class Demo extends Component {
//   render() {
//     return (
//       <ReactStory stories={stories} />
//     )
//   }
// }

render(<Demo />, document.querySelector('#demo'))
