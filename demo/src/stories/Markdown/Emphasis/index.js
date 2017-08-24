import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const EmphasisDemo = () => (
  <Story>
    <Demo
      name="Emphasis Demo"
      desc="Emphasis examples"
      code={code}
    >
      <Markdown source={md} />
    </Demo>
  </Story>
)

export default {
  name: 'Emphasis',
  component: EmphasisDemo
}
