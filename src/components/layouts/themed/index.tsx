'use strict'

import React from 'react'

import styles from './styles.scss'

import { Provider, useTheme } from '~/contexts/theme'

const Consumer = (props) => {
  const theme = useTheme()
  return <div className={`${styles.layout} ${styles[theme]}`}>{props.children}</div>
}

export const ThemedLayout = (props) => {
  const { theme, ...passThroughProps } = props
  return <Provider value={{ theme }}>
    <Consumer {...passThroughProps} />
  </Provider>
}

export default ThemedLayout
