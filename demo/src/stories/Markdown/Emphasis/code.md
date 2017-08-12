### demo.md
```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

### index.js
```javascript
import React from 'react'
import Markdown from 'react-smackdown'
import md from './demo.md'

export default () => (
  <Markdown source={md} />
)
```
