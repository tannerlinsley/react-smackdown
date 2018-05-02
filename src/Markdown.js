import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser, { convertNodeToElement, processNodes } from 'react-html-parser'
import generatePropsFromAttributes from 'react-html-parser/lib/utils/generatePropsFromAttributes'
//
import Code from './Code'
import makeCompiler from './makeCompiler'

// See https://github.com/isagalaev/highlight.js/tree/master/src/languages
// for all language options and https://github.com/isagalaev/highlight.js/tree/master/src/styles
// for all theming options

export default class Markdown extends React.Component {
  static propTypes = {
    renderers: PropTypes.object,
    source: PropTypes.string,
    syntax: PropTypes.object,
    markdownConfig: PropTypes.object,
  }
  static defaultProps = {
    renderers: {},
    source: '',
    syntax: {},
    markdownConfig: {},
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
      source, renderers, syntax, markdownConfig, style, className, ...rest
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
      if (node.type === 'tag' && node.name === 'pre') {
        if (node.children && node.children.length === 1 && node.children[0].name === 'code') {
          node = node.children[0]
          convertNodeToElement(node, index, transform)
          const props = {
            ...generatePropsFromAttributes(node.attribs, index),
            isInPre: node.parent && node.parent.name === 'pre',
          }
          return React.createElement(
            PreCode,
            props,
            node.children && node.children[0] && node.children[0].data
              ? node.children[0].data
              : null
          )
        }
      }
    }

    return (
      <div {...{ style, className }}>
        {ReactHtmlParser(this.markdownCompiler(source), {
          transform,
          ...rest,
        })}
      </div>
    )
  }
}
