'use strict'

import React from 'react'

import { App, Styles } from '@composition/composer'

const AmpOutput = () => {
  return <html>
    <head>
      <title>Composition Test</title>
      <link rel='stylesheet' type='text/css' href='/resources/main.css' />
      <Styles inline amp-custom="true" />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput
