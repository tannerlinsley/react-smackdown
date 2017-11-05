import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './header.md'
import code from './code.md'

const CustomHeader = ({ children }) => <b style={{ color: 'green' }}>{children}</b>

const HeaderDemo = () => (
  <Story>
    <Demo
      name="Customer Header"
      desc="Custom header with an icon"
      code={code}
    >
      <Markdown
        source={md}
        components={{
          h1: CustomHeader
        }}
      />
    </Demo>
  </Story>
)

export default {
  name: 'Header',
  component: HeaderDemo
}
