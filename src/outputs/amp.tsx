'use strict'

import React from 'react'

import { App, /* Resource, Styles, */ useCompositionContext , useResource, useStyles} from '@composition/composer'

declare module 'react' {
  interface HTMLAttributes<T> {
    amp?: string
  }
}

function useCanonicalHref() {
  const { location } = useCompositionContext()

  return location
    // strip custom output query param
    .replace(/(\?|&)output=[^&]*(&|$)/, (_, symbol) => symbol)
    // strip trailing ?
    .replace(/\?$/, '')
}

const AmpBoilerPlate = () => {
  const canonicalHref = useCanonicalHref()

  return <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="canonical" href={canonicalHref} />
    <script async src="https://cdn.ampproject.org/v0.js" />
    <style amp-boilerplate="" dangerouslySetInnerHTML={{ __html: 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}' }} />
    <noscript><style amp-boilerplate="" dangerouslySetInnerHTML={{ __html: 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}' }} /></noscript>
  </>
}

const AmpOutput = () => {
  const mainCss = useResource({ name: 'public/resources/main.css' }) || ''
  const styles = useStyles() || ''

  return <html amp="">
    <head>
      <AmpBoilerPlate />
      <title>Composition Test</title>
      <style amp-custom="" dangerouslySetInnerHTML={{ __html: `${mainCss}${styles}` }} />
    </head>
    <body>
      <App static />
    </body>
  </html>
}

export default AmpOutput

// const AmpOutput1 = () => {
//   return <html amp="">
//     <head>
//       <AmpBoilerPlate />
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

// const AmpOutput2 = () => {
//   const mainCss = useResource({ name: 'public/resources/main.css' }) || ''

//   return <html>
//     <head>
//     <meta charSet="UTF-8" />
//       <AmpBoilerPlate />
//       <title>Composition Test</title>
//       <style amp-custom="" dangerouslySetInnerHTML={{ __html: mainCss }} />
//       <Styles amp />
//     </head>
//     <body>
//       <App static />
//     </body>
//   </html>
// }
