import React from 'react'
import { Demo } from 'react-show'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const HeadersDemo = () => (
  <Demo
    name="Headers Demo"
    desc="Render markdown headers"
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

export default {
  name: 'Headers',
  component: HeadersDemo
}
