'use strict'

import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import Thumbor from 'thumbor-lite'

import { useTheme } from '~/contexts/theme'

import styles from './styles.scss'

const thumbor = new Thumbor('abc')
console.log(thumbor)

const Blurb = props => {
  const theme = useTheme()
  return (
    <Link
      className={`${styles.blurb} ${styles[theme]}`}
      to={props.link || '/article'}>
      {props.content || 'article'}
    </Link>
  )
}

Blurb.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string
}

export default Blurb
