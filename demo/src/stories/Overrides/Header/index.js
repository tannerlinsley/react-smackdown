import React from 'react'
import Smackdown from '../../../../../src'
import md from './header.md'

const CustomHeader = ({ children }) => <b style={{ color: 'green' }}>{children}</b>

const HeaderDemo = () => (
  <Smackdown
    source={md}
    renderers={{
      h1: CustomHeader,
    }}
  />
)

export default HeaderDemo
