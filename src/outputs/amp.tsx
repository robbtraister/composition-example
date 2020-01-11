'use strict'

import React from 'react'

import { App, /* Resource, Styles, */ useResource, useStyles } from '@composition/composer'

// const AmpOutput = () => {
//   const resource = useResource({ name: 'public/resources/main.css' })

//   return <html>
//     <head>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width" />
//       <title>Composition Test</title>
//       <style amp-custom="true" dangerouslySetInnerHTML={{ __html: resource }} />
//       <Styles inline amp-custom="true" />
//     </head>
//     <body>
//       <App static />
//     </body>
//   </html>
// }

// const AmpOutput = () => {
//   return <html>
//     <head>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width" />
//       <title>Composition Test</title>
//       <Resource name= 'public/resources/main.css'>
//         {({ resource }) =>
//           <Styles amp>
//             {({ styles, ...props }) =>
//               <style {...props} dangerouslySetInnerHTML={{ __html: `${resource || ''}${styles || ''}` }} />
//             }
//           </Styles>
//         }
//       </Resource>
//     </head>
//     <body>
//       <App static />
//     </body>
//   </html>
// }

const AmpOutput = () => {
  const mainCss = useResource({ name: 'public/resources/main.css' })
  const styles = useStyles()

  return <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Composition Test</title>
      <style amp-custom="true" dangerouslySetInnerHTML={{ __html: `${mainCss || ''}${styles || ''}` }} />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput
