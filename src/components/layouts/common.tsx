'use strict'

import React from 'react'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const Layout = (props) => {
  const theme = useTheme()
  return <div className={`${styles.layout} ${styles[theme]}`}>{props.children}</div>
}

export default Layout
