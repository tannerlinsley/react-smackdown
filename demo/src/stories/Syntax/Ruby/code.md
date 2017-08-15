### index.js
```javascript
import React from 'react'
import { ruby } from 'react-syntax-highlighter/lib/languages'
import { atomOneLight } from 'react-syntax-highlighter/lib/themes'
import Markdown from '../../../../../src'
import md from './demo.md'

const syntax = {
  languages: [
    { name: 'ruby', syntax: ruby }
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
