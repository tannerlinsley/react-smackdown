import React from 'react'
import { Story, Demo } from 'react-story'
import Markdown from '../../../../../src'
import md from './demo.md'
import code from './code.md'
import styled from 'styled-components'

const TablesDemo = () =>
  <Story>
    <Demo name="Tables Demo" desc="Tables examples" code={code}>
      <Markdown
        source={md}
        components={{
          img: styled.img`max-width: 100%;`
        }}
      />
    </Demo>
  </Story>

export default {
  name: 'Tables',
  component: TablesDemo
}
