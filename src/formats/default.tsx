'use strict'

import React from 'react'

import { App, Meta, Styles, Title } from '@composition/composer'

import './styles.scss'

const DefaultFormat = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Title />
        <link rel="amphtml" href="?format=amp" />
        <link rel="stylesheet" type="text/css" href="/resources/main.css" />
        <Styles />
      </head>
      <body>
        <App />
      </body>
    </html>
  )
}

export const contentType = 'text/html'

export default DefaultFormat
