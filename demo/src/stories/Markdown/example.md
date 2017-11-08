# React Smackdown

Under the hood `react-smackdown` uses `markdown-to-jsx` which supports github flavored markdown, meaning you can use all of the markup that works on github (tables, links, images, badges, etc.) – see here for a full breakdown: [github flavored markdown](https://guides.github.com/features/mastering-markdown/).

## Features

- Extremely performant, takes advantage of vdom via lowlight
- Functional components the "React" way
- Full github flavored markdown support
- Simple & Powerful API
- Sytnax highlighting for over 175 languages

## Table of Contents
- [Installation](#installation)
- [Quick Example](#quick-example)

## Installation
```
$ yarn add react-smackdown
```

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
