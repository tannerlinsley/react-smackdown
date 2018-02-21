import React from 'react'

let SyntaxHighlighter = () => null
let registerLanguage = () => {}
if (typeof document !== 'undefined') {
  const imported = require('react-syntax-highlighter/dist/light')
  SyntaxHighlighter = imported.default
  registerLanguage = imported.registerLanguage
}

export default class SyntaxRenderer extends React.Component {
  state = {
    ready: false,
  }
  componentDidMount () {
    const { languages } = this.props
    // Register required languages through lowlight
    if (languages) {
      languages.forEach(language => {
        registerLanguage(language.name, language.syntax)
      })
    }
    this.ready()
  }
  ready = () => {
    this.setState({
      ready: true,
    })
  }
  render () {
    const { languages, theme, className = '', isInPre, children, ...rest } = this.props
    const { ready } = this.state

    const langClass = className.split('-')[1]
    const language = langClass !== 'null' && langClass !== 'undefined' ? langClass : 'text'

    // Can pass through any props for syntax highlighting
    // https://github.com/conorhastings/react-syntax-highlighter
    const props = {
      language,
      children,
      style: theme,
      className: `syntax-${language}`,
      ...rest,
      showLineNumbers: language ? rest.showLineNumbers : false,
    }

    return ready && isInPre ? <SyntaxHighlighter {...props} /> : <code>{children}</code>
  }
}
