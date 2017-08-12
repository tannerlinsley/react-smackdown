### demo.md
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
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
