# react-smackdown

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React-Smackdown makes it super easy for you to get started with github flavored markdown (via markdown-to-jsx) and syntax highlighting for over 175 languages (powered by highlight.js). It uses Lowlight under the hood (via react-syntax-highlighter) for extremely efficient rendering and is easy to override and theme.

Available Languages:

https://github.com/isagalaev/highlight.js/tree/master/src/languages

Available Themes:

https://github.com/isagalaev/highlight.js/tree/master/src/styles

Usage:

```javascript
  import Smackdown from 'smackdown'
  import { javascript } from 'react-syntax-highlighter/dist/languages/hljs/hljs'
  import { atomOneLight } from 'react-syntax-highlighter/dist/styles/hljs/hljs'
  import md from './markdown.md'

  const syntax = {
    languages: [
      { name: 'javascript', syntax: javascript }
    ],
    showLineNumbers: true,
    lineNumberStyle: { opacity: .5 },
    theme: atomOneLight
  }

  <Smackdown
    source={md}
    syntax={syntax}
  />
```
