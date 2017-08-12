### demo.md
```
[I am an inline-style link](https://www.google.com)
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
