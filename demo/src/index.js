import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import ReactShow, { makeStoriesFromFolders } from 'react-show'

const jsReq = require.context('./stories', true, /\index.js$/)
const mdReq = require.context('./stories', true, /code\.md$/)
const stories = makeStoriesFromFolders(jsReq, mdReq)

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
