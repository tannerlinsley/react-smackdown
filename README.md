# React Smackdown

React Smackdown is the easiest way to render markdown as html in React. With a single component and string of markdown, you get server-side-compatible JSX, complete with syntax highlighting. This is made possible with the following amazing libraries:

* [RePrism](https://github.com/tannerlinsley/reprism)
* [Showdown](https://github.com/showdownjs/showdown)
* [React-Html-Parser](https://github.com/wrakky/react-html-parser)

## Features

* ⚛️ React or Preact
* 🚀 [Blazing](https://twitter.com/acdlite/status/974390255393505280) fast.
* ⚙️ Custom Markdown-to-React Renderers
* 🥇 Server-side-rendering compatible
* 🎨 Themeable and Extensible

## Installation

```bash
# yarn
$ yarn add react-smackdown
# npm
$ npm install --save react-smackdown
```

## `<Markdown>`

Use the `<Markdown>` component to render markdown and also handle syntax highlighting automatically.

**Props**:

* `source: String (Required)` - The markdown string you want to render
* `renderers: Object` - An object of optional renderers (`{tag: component}`), used to render any tags encountered in the markdown.
* `markdownConfig: Object` - An optional configuration object for the underlying [`showdown`](https://github.com/showdownjs/showdown) instance.
* `syntax: Object` - Optional props that will be forwarded to the `Code` component for any syntax in the markdown
* `highlightInline: Boolean` - Defaults to `true`. If `true`, will also highlight any inline code blocks.

````javascript
import { Markdown, loadLanguages } from 'smackdown'

// Import any non-default RePrism languages you need:
import jsx from 'reprism/languages/jsx'
import bash from 'reprism/languages/bash'
import go from 'reprism/languages/go'

// Import any Prism theme. We have two of our own "smackdown" themes:
import 'smackdown/themes/smackdown-dark.css'
// or  'smackdown/themes/smackdown-light.css'

// Load the languages into smackdown (via RePrism)
loadLanguages(jsx, bash, go)

const someMarkdown = `
  # Hello!

  This is some **markdown** with some code!

  ```javascript
    const foo = 'bar'
  ```

  ```jsx
    const foo = <div>Hello!</div>
  ```

  ```bash
    $ npm install react-smackdown
  ```

  ```go
    package main
    import "fmt"
    func main() {
        fmt.Println("hello world")
    }
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
>
> ```jsx
> const foo = <div>Hello!</div>;
> ```
>
> ```bash
> $ npm install react-smackdown
> ```
>
> ```go
> package main
> import "fmt"
> func main() {
>     fmt.Println("hello world")
> }
> ```

<br />

#### React Renderers

If you want to use your own components to render markdown, it's easy! Just provide an object of tag-to-component values to the `renderers` prop.

**Important Note**: _If you override the `pre` or `code` tag renderers, you will most likely break the automatic syntax highlighting!_

```javascript
import { Markdown } from "smackdown";

const renderers = {
  a: ({ href, ...rest }) => <Link to={href} {...rest} />
}

<Markdown
  source={someMarkdown}
  renderers={renderers}
/>;
```

## `<Code>` Component

If you don't need to render any markdown, but still want syntax highlighting, you can use the `<Code>` component directly!

**Props**:

* `source: String (Required)` - The code string you want to highlight and render
* `language: String (Recommended)` - Defaults to `markup`. The [`reprism`](https://github.com/tannerlinsley/reprism) language you want to use to highlight the source.
* `component: String | Component` - Defaults to `pre` The component you want to use to render the outer element. Change this to `code` if you need to do inline rendering of code.
* `showLineNumbers: Boolean` - Defaults to `true`

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
