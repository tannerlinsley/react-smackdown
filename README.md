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
  import { javascript } from 'react-syntax-highlighter/dist/languages'
  import { atomOneLight } from 'react-syntax-highlighter/dist/styles'
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


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-smackdown

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
