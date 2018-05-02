# react-smackdown

React-Smackdown is the easiest way to render markdown as html in React. With a single component and string of markdown, you get server-side-compatible JSX, complete with syntax highlighting.

## Features

* ⚛️ React or Preact
* 💥 Tiny
* 🚀 [Blazing](https://twitter.com/acdlite/status/974390255393505280) fast.
* ⚙️ Custom Markdown-to-React Renderers
* 🥇 Server-side-rendering

## Installation

```bash
// yarn
$ yarn add react-smackdown
// npm
$ npm install --save react-smackdown
```

## `<Markdown>`

Use the `<Markdown>` component to render markdown and also handle syntax highlighting automatically

````javascript
  import { Markdown } from 'smackdown'

  // Import any Prism.js theme. This is ours!
  import 'smackdown/themes/one-dark-pro.css'

  const someMarkdown = `
    # Hello!

    This is some **markdown** with some code!

    ```javascript
      const foo = 'bar'
    ```
  `

  <Markdown
    source={someMarkdown}
  />
````

The above code would produce this markdown:

> # Hello!
>
> This is some **markdown** with some code!
>
> ```javascript
> const foo = "bar";
> ```

<br />

## React Renderers

If you want to use your own components to render markdown, it's easy! Just provide an object of tag-to-component values to the `renderers` prop:

```javascript
import { Markdown } from "smackdown";

<Markdown
  source={someMarkdown}
  renderers={{
    a: ({ href, ...rest }) => <Link to={href} {...rest} />
  }}
/>;
```

## `<Code>` Component

If you don't need to render any markdown, but still want syntax highlighting, you can use the `<Code>` component directly!

```javascript
import { Code } from "smackdown";

const source = `
  const foo = 'bar'

  if (foo) {
    console.log('I has foo!')
  }
`

<Code
  source={source}
  language='javascript'
/>;
```

The above example would produce this code block:

```javascript
const foo = "bar";

if (foo) {
  console.log("I has foo!");
}
```

<br />
