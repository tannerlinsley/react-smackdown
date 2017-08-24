import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const LinksDemo = () => (
  <Story>
    <Demo
      name="Links Demo"
      desc="Links examples"
      code={code}
    >
      <Markdown source={md} />
    </Demo>
  </Story>
)

export default {
  name: 'Links',
  component: LinksDemo
}
