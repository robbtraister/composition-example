'use strict'

import React from 'react'

import { App, /* Resource, Styles, */ useResource, useStyles, useCompositionContext } from '@composition/composer'

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
  const { location } = useCompositionContext()
  const mainCss = useResource({ name: 'public/resources/main.css' })
  const styles = useStyles()

  const canonicalHref = location
    // strip custom output query param
    .replace(/(\?|&)output=[^&]*(&|$)/, (_, symbol) => symbol)
    // strip trailing ?
    .replace(/\?$/, '')

  return <html amp="">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="canonical" href={canonicalHref} />
      <title>Composition Test</title>
      <script async src="https://cdn.ampproject.org/v0.js" />
      <style amp-boilerplate="" dangerouslySetInnerHTML={{ __html: 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}' }} />
      <noscript><style amp-boilerplate="" dangerouslySetInnerHTML={{ __html: 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}' }} /></noscript>
      <style amp-custom="" dangerouslySetInnerHTML={{ __html: `${mainCss || ''}${styles || ''}` }} />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput
