'use strict'

import React from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const Blurb = () => {
  const theme = useTheme()
  return <Link className={`${styles.blurb} ${styles[theme]}`} to="/article">article</Link>
}

export default Blurb
