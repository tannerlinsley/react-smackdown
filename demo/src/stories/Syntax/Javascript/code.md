### index.js
```javascript
import React from 'react'
import { javascript } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import Markdown from '../../../../../src'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight,
}

export default () => (
  <Markdown
    source={md}
    syntax={syntax}
  />
)
```
