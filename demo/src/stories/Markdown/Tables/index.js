import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const TablesDemo = () => (
  <Story>
    <Demo
      name="Tables Demo"
      desc="Tables examples"
      code={code}
    >
      <Markdown source={md} />
    </Demo>
  </Story>
)

export default {
  name: 'Tables',
  component: TablesDemo
}
