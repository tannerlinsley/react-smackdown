import React from 'react'
import { Demo } from 'react-show'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const EmphasisDemo = () => (
  <Demo
    name="Emphasis Demo"
    desc="Emphasis examples"
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

export default {
  name: 'Emphasis',
  component: EmphasisDemo
}
