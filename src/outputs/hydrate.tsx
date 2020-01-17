'use strict'

import React from 'react'

import { App, Meta, Styles, Title } from '@composition/composer'

import './styles.scss'

const DefaultOutput = () => {
  return <html>
    <head>
      <Meta />
      <Title />
      <link rel='stylesheet' type='text/css' href='/resources/main.css' />
      <Styles />
    </head>
    <body>
      <App hydrate-only />
    </body>
  </html>
}

export default DefaultOutput
