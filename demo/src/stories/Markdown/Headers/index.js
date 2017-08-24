import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const HeadersDemo = () => (
  <Story>
    <Demo
      name="Headers Demo"
      desc="Render markdown headers"
      code={code}
    >
      <Markdown source={md} />
    </Demo>
  </Story>
)

export default {
  name: 'Headers',
  component: HeadersDemo
}
