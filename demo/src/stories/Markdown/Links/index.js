import React from 'react'
import { Demo } from 'react-show'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'

const LinksDemo = () => (
  <Demo
    name="Links Demo"
    desc="Links examples"
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

export default {
  name: 'Links',
  component: LinksDemo
}
