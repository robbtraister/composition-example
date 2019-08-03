'use strict'

import React from 'react'

const Page = ({ App, Libs }) =>
  <html>
    <head>
      <Libs />
    </head>
    <body>
      <App />
    </body>
  </html>

export default Page
