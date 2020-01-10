'use strict'

import React from 'react'

import { App, Resource, Styles } from '@composition/composer'

const AmpOutput = () => {
  return <html>
    <head>
      <title>Composition Test</title>
      <Resource
        name='public/resources/main.css'
        render={({ resource }) =>
          <style amp-custom="true" dangerouslySetInnerHTML={{ __html: resource }} />}
        />
      <Styles inline amp-custom="true" />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput
