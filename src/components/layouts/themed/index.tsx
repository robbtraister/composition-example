'use strict'

import React from 'react'

import styles from './styles.scss'

import { Provider } from '~/contexts/theme'

export const ThemedLayout = (props: {
  children?: React.ReactNode
  theme?: string
}) => {
  const { theme } = props
  return (
    <Provider value={{ theme }}>
      <div className={`${styles.layout} ${styles[theme]}`}>
        {props.children}
      </div>
    </Provider>
  )
}

export default ThemedLayout
