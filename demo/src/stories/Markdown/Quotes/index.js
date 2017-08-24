import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const QuotesDemo = () => (
  <Story>
    <Demo
      name="Quotes Demo"
      desc="Quotes examples"
      code={code}
    >
      <Markdown source={md} />
    </Demo>
  </Story>
)

export default {
  name: 'Quotes',
  component: QuotesDemo
}
