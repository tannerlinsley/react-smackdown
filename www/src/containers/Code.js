import React from 'react'
import { SiteData, Head } from 'react-static'
import styled from 'styled-components'

//

import Sidebar from 'components/Sidebar'
import { Code } from '../../../src/'

const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 13px;
  font-family: monospace;
`

const defaultSource = `const MyComponent = () => (
  <div>
    Paste some code!
  </div>
)

export default MyComponent`

export default class CodeExample extends React.Component {
  state = {
    source: defaultSource,
  }
  render () {
    const { source } = this.state
    return (
      <SiteData
        render={({ repoName }) => (
          <Sidebar>
            <Head>
              <title>{`Code Example | ${repoName}`}</title>
            </Head>
            <TextArea
              value={source}
              onChange={e =>
                this.setState({
                  source: e.target.value,
                })
              }
              onKeyDown={e => {
                if (e.keyCode === 9 || e.which === 9) {
                  e.preventDefault()
                }
              }}
            />
            <Code language="javascript" source={source} />
          </Sidebar>
        )}
      />
    )
  }
}
