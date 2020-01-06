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

const Text = ({ content }) => <>{content.data}</>

const Body = (props) => {
  const theme = useTheme()
  return (
    <Div className={styles[theme]}>
      <Content {...props} render={Text} />
    </Div>
  )
}

export default Body
