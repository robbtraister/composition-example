'use strict'

import React from 'react'

import { App, Meta, Styles, Title } from '@composition/composer'

import './styles.scss'

const DefaultFormat = () => {
  return (
    <html>
      <head>
        <Meta />
        <Title />
        <link rel="stylesheet" type="text/css" href="/resources/main.css" />
        <Styles />
      </head>
      <body>
        <App />
      </body>
    </html>
  )
}

export default DefaultFormat
