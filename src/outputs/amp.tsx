'use strict'

import React from 'react'

import { App, Styles, useResource } from '@composition/composer'

const AmpOutput = () => {
  const resource = useResource({ name: 'public/resources/main.css' })

  return <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Composition Test</title>
      <style amp-custom="true" dangerouslySetInnerHTML={{ __html: resource }} />
      <Styles inline amp-custom="true" />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput
