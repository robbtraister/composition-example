'use strict'

import React from 'react'

import { App, Styles } from '@composition/composer'

const DefaultOutput = () => {
  return <html>
    <head>
      <title>Composition Test</title>
      <link rel='stylesheet' type='text/css' href='/resources/main.css' />
      <Styles />
    </head>
    <body>
      <App />
    </body>
  </html>
}

export default DefaultOutput