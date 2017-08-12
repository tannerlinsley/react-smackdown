### demo.md
```
> This is a very long line that will still be quoted properly when it wraps.
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
