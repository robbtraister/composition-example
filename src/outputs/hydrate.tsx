'use strict'

import React from 'react'

import { App, Styles } from '@composition/composer'

const DefaultOutput = () => {
  return <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Composition Test</title>
      <link rel='stylesheet' type='text/css' href='/resources/main.css' />
      <Styles />
    </head>
    <body>
      <App hydrate-only />
    </body>
  </html>
}

export default DefaultOutput
