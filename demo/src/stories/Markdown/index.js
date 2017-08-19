import React from 'react'
import { Demo, PropsTable } from 'react-show'
import Markdown from '../../../../src'
import MarkdownRaw from '!raw-loader!../../../../src'
import md from './example.md'
import code from './code.md'

import Headers from './Headers'
import Emphasis from './Emphasis'
import Links from './Links'
import Quotes from './Quotes'
import Tables from './Tables'


const MarkdownDemo = () => (
  <Demo
    name="Markdown Demo"
    desc="Here's some markdown."
    code={code}
  >
    <Markdown source={md} />
  </Demo>
)

const Story = () => (
  <div>
    <MarkdownDemo />
    <PropsTable
      demonstrating={Markdown}
      raw={MarkdownRaw}
    />
  </div>
)

export default {
  name: 'Markdown',
  component: Story,
  children: [Headers, Emphasis, Links, Quotes, Tables]
}
