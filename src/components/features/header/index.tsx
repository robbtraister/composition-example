'use strict'

import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const Header = props => {
  const theme = useTheme()
  return (
    <h1 className={`${styles.header} ${styles[theme]}`}>
      <NavLink to="/">{props.title || 'The Washington Post'}</NavLink>
    </h1>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
