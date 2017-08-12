### demo.md
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
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
