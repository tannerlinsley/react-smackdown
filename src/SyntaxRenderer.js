import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'

export default ({ languages, theme, ...rest }) => {
  // Register required languages through lowlight
  if (languages) {
    languages.forEach(language => {
      registerLanguage(language.name, language.syntax)
    })
  }

  // Return new Code component to do the highlighting
  const Code = ({ className = '', children }) => {
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

    return language ? <SyntaxHighlighter {...props} /> : <code>{children}</code>
  }

  Code.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  return Code
}
