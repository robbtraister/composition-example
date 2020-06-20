'use strict'

import PropTypes from 'prop-types'
import React from 'react'

import { Content } from '@composition/components'
import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

import styled from 'styled-components'
const Div = styled.div`
  padding: 10px;
`
// const Div = (props: {
//   children?: React.ReactNode
//   className?: string
//   style?: object
// }) => <div {...props} style={{ padding: '10px', ...(props.style || {}) }} />

const Text = ({ content }: { content: any }) => <>{content && content.data}</>

const Body = props => {
  const theme = useTheme()
  return (
    <Div className={styles[theme]}>
      <Content {...props} render={Text} />
    </Div>
  )
}

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Body
