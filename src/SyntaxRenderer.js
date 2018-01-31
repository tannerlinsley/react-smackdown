import React from 'react'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'

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
    const { languages, theme, className, children, ...rest } = this.props
    const { ready } = this.state

    const langClass = className.split('-')[1]
    const language = langClass !== 'null' ? langClass || null : ''

    // Can pass through any props for syntax highlighting
    // https://github.com/conorhastings/react-syntax-highlighter
    const props = {
      language,
      children,
      style: theme,
      className: `syntax-${language}`,
      ...rest,
    }

    return ready && language ? <SyntaxHighlighter {...props} /> : <code>{children}</code>
  }
}
