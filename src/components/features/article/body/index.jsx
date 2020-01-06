'use strict'

import React from 'react'

import { Content } from '@composition/components'
import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

// import styled from 'styled-components'
// const Div = styled.div`
//   padding: 10px;
// `
const Div = (props) => <div {...props} style={{ padding: '10px', ...(props.style || {}) }} />

class Client extends React.Component {
  constructor (props) {
    super(props)
    this.state = { client: false }
  }
  componentDidMount () {
    this.setState({ client: true })
  }

  render () {
    const { client } = this.state
    return client && <div>Interactive</div>
  }
}

const Text = ({ content }) => <>{content.data}</>

const Body = (props) => {
  const theme = useTheme()
  return (
    <Div className={styles[theme]}>
      <Content source="echo" query="This is article content" render={Text} />
      <Client />
    </Div>
  )
}

export default Body
