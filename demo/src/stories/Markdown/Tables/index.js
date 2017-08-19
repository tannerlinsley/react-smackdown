import React from 'react'
import { Demo } from 'react-show'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const TablesDemo = () => (
  <Demo
    name="Tables Demo"
    desc="Tables examples"
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

export default {
  name: 'Tables',
  component: TablesDemo
}
