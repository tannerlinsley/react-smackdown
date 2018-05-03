import React from 'react'
import Prism from 'prismjs'
//

const { languages } = Prism

const toStyle = style =>
  Object.keys(style)
    .map(key => `${key}:${style[key]};`)
    .join('')

const rawEl = (el, props, children) => {
  const propsArr = []
  Object.keys(props).forEach(key => {
    const value = key === 'style' ? toStyle(props[key]) : props[key]
    propsArr.push(`${key}${value ? `='${value.toString()}'` : ''}`)
  })

  return `<${el}${propsArr.length ? ` ${propsArr.join(' ')}` : ''}>${
    Array.isArray(children) ? children.join('') : children
  }</${el}>`
}

export default class SyntaxHighlighter extends React.Component {
  render () {
    const {
      showLineNumbers = true,
      language,
      className = '',
      component = 'pre',
      source,
      children,
      ...rest
    } = this.props

    let resolvedLanguage = language

    if (!language) {
      resolvedLanguage = 'markup'
    } else if (!languages[language]) {
      console.warn(
        `The prism language '${language}' hasn't been loaded yet! Using prism's 'markdown' language for now.
You can import this language using the following snippet:

import 'prismjs/components/prism-${language}'`
      )
      resolvedLanguage = 'markup'
    }

    if (resolvedLanguage === 'javascript' && languages.jsx) {
      resolvedLanguage = 'jsx'
    }

    const classes = [
      ...className.split(' '),
      showLineNumbers && 'line-numbers',
      `language-${resolvedLanguage}`,
    ]
      .filter(Boolean)
      .join(' ')

    const resolvedSource = source || ''
    const lines = resolvedSource.split('\n')
    const lineCount = lines.length

    const lineNumbers = showLineNumbers
      ? rawEl(
        'div',
        {
          class: 'line-numbers',
          style: {
            position: 'absolute',
            transform: 'translateX(-4em)',
            width: '3.5em',
            'text-align': 'right',
            'border-right': '2px solid #9999992b',
            'padding-right': '.5em',
            'pointer-events': 'none',
            color: '#999',
          },
        },
        [...new Array(lineCount)].map((d, i) => rawEl('span', {}, `${i + 1}<br />`))
      )
      : ''

    const html = Prism.highlight(resolvedSource, languages[resolvedLanguage], resolvedLanguage)

    const finalHtml = `${lineNumbers}${html}`

    const Component = component

    return (
      <Component
        className={classes}
        {...rest}
        style={
          showLineNumbers
            ? {
                position: 'relative',
                paddingLeft: '3.5em',
              }
            : {}
        }
        dangerouslySetInnerHTML={{
          __html: finalHtml,
        }}
      />
    )
  }
}
