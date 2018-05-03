import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser, { convertNodeToElement, processNodes } from 'react-html-parser'
import generatePropsFromAttributes from 'react-html-parser/lib/utils/generatePropsFromAttributes'
//
import Code from './Code'
import makeCompiler from './makeCompiler'

export default class Markdown extends React.Component {
  static propTypes = {
    renderers: PropTypes.object,
    source: PropTypes.string,
    syntax: PropTypes.object,
    markdownConfig: PropTypes.object,
    highlightInline: PropTypes.bool,
  }
  static defaultProps = {
    renderers: {},
    source: '',
    syntax: {},
    markdownConfig: {},
    highlightInline: true,
  }
  constructor (props) {
    super()
    this.markdownCompiler = makeCompiler(props.markdownConfig)
  }
  componentWillReceiveProps (next) {
    if (next.markdownConfig !== this.props.markdownConfig) {
      this.markdownCompiler = makeCompiler(next.markdownConfig)
    }
  }
  render () {
    const {
      source, renderers, syntax, markdownConfig, highlightInline, ...rest
    } = this.props

    const PreCode = props => <Code {...props} {...syntax} />

    const transform = (node, index) => {
      // Transform any component renderers as react components
      if (node.type === 'tag' && renderers[node.name]) {
        const Component = renderers[node.name]
        const props = generatePropsFromAttributes(node.attribs, index)
        const children = processNodes(node.children, transform)
        return React.createElement(Component, props, children)
      }
      // Transform any code usin the Code component
      if (node.type === 'tag') {
        if (
          node.name === 'pre' &&
          (node.children && node.children.length === 1 && node.children[0].name === 'code')
        ) {
          const codeNode = node.children[0]
          convertNodeToElement(codeNode, index, transform)

          const generatedProps = generatePropsFromAttributes(codeNode.attribs, index)
          let language = (generatedProps.className || '')
            .split(' ')
            .find(d => d.includes('language-'))
          language = language && language.substring('language-'.length)

          const props = {
            ...generatedProps,
            language,
            component: 'pre',
          }

          const children =
            codeNode.children && codeNode.children[0] && codeNode.children[0].data
              ? codeNode.children[0].data
              : null
          return React.createElement(PreCode, props, children)
        } else if (highlightInline && node.name === 'code' && node.parent.name !== 'pre') {
          const codeNode = node.children[0]
          const props = {
            component: 'code',
            showLineNumbers: false,
            className: 'code-inline',
            language: 'clike',
          }
          return React.createElement(PreCode, props, codeNode.data)
        }
      }
    }

    return (
      <div {...rest}>
        {ReactHtmlParser(this.markdownCompiler(source), {
          transform,
        })}
      </div>
    )
  }
}
