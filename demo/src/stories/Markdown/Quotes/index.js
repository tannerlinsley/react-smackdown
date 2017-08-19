import React from 'react'
import { Demo } from 'react-show'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const QuotesDemo = () => (
  <Demo
    name="Quotes Demo"
    desc="Quotes examples"
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

export default {
  name: 'Quotes',
  component: QuotesDemo
}
