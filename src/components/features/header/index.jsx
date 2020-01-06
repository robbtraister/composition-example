'use strict'

import React from 'react'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const Header = (props) => {
  const theme = useTheme()
  return <h1 className={[styles.header].concat(styles[theme] || []).join(' ')}>The Washington Post</h1>
}

export default Header
