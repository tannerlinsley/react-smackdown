# react-smackdown

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React-Smackdown makes it super easy for you to get started with github flavored markdown and syntax highlighting for over 175 languages (powered by highlight.js). It uses Lowlight under the hood for extremely efficient rendering and is easy to override and theme.

Some default styles are included to make code rendering nice at './src/smackdown.css' but you absolutely do not need to import it.

Available Languages:

https://github.com/isagalaev/highlight.js/tree/master/src/languages

Available Themes:

https://github.com/isagalaev/highlight.js/tree/master/src/styles

Usage:

```javascript
  import Smackdown from 'smackdown'
  import 'smackdown/smackdown.css' // optional
  import 'highlight.js/styles/atom-one-light.css' // pick your favorite
  import md from './markdown.md'

  <Smackdown
    source={md}
    languages={['ruby', 'sql', 'javascript', 'elixir', 'json']}
  />
```


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
