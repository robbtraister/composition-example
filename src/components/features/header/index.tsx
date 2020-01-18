'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const Header = props => {
  const theme = useTheme()
  return (
    <h1 className={`${styles.header} ${styles[theme]}`}>
      <NavLink to="/">The Washington Post</NavLink>
    </h1>
  )
}

export default Header
