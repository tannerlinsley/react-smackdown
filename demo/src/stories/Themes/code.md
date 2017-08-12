# Syntax Highlighting

Under the hood `react-smackdown` uses `react-syntax-highlighter` which supports all highlight.js syntaxes and themes via lowlight. You can see all available languages here https://github.com/isagalaev/highlight.js/tree/master/src/languages.

## Quick Example
```javascript
import React from 'react'
import Markdown from 'react-smackdown'
import { javascript, ruby, sql, elixir, json } from 'react-syntax-highlighter/dist/languages'
import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'javascript', syntax: javascript }
  ],
  showLineNumbers: true,
  lineNumberStyle: { opacity: .5 },
  theme: atomOneLight
}

export default () => (
  <Markdown source={md} syntax={syntax} />
)
```
