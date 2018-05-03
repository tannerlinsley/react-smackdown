import React from 'react'
import { Link } from 'react-static'
import { Markdown } from '../../../src'

const customRenderers = {
  a: ({ href = '', ...rest }) => {
    const to = href.startsWith('/') ? href.replace('.md', '') : href
    return <Link to={to} {...rest} />
  },
}

export default ({ renderers, ...rest }) => (
  <Markdown
    renderers={{
      ...renderers,
      ...customRenderers,
    }}
    {...rest}
  />
)
