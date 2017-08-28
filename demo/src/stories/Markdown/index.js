import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import Markdown from '../../../../src'
import MarkdownRaw from '!raw-loader!../../../../src'
import md from './example.md'
import code from './code.md'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'

import Headers from './Headers'
import Emphasis from './Emphasis'
import Links from './Links'
import Quotes from './Quotes'
import Tables from './Tables'

const syntax = {
  languages: [{ name: 'javascript', syntax: javascript }],
  showLineNumbers: true,
  lineNumberStyle: { opacity: 0.5 },
  theme: atomOneLight
}

const MarkdownDemo = () =>
  <Demo name="Markdown Demo" desc="Here's some markdown." code={code}>
    <Markdown source={md} syntax={syntax} />
  </Demo>

const StoryComponent = () =>
  <Story>
    <MarkdownDemo />
    {/* <PropsTable
      demonstrating={Markdown}
      raw={MarkdownRaw}
    /> */}
  </Story>

export default {
  name: 'Markdown',
  component: StoryComponent,
  children: [Headers, Emphasis, Links, Quotes, Tables]
}
