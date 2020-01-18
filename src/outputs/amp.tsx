'use strict'

import React from 'react'

import {
  App,
  Meta,
  /* Resource, Styles, */ Title,
  usePageContext,
  useResource,
  useStyles
} from '@composition/composer'

import './styles.scss'

declare module 'react' {
  interface HTMLAttributes<T> {
    amp?: string
  }
}

function useCanonicalHref() {
  const { location } = usePageContext()

  return (
    location
      // strip custom output query param
      .replace(/(\?|&)output=[^&]*(&|$)/, (_, symbol) => symbol)
      // strip trailing ?
      .replace(/\?$/, '')
  )
}

const AmpOutput = () => {
  const canonicalHref = useCanonicalHref()
  const mainCss = useResource({ name: 'public/resources/main.css' }) || ''
  const styles = useStyles() || ''

  return (
    <html amp="">
      <head>
        <Meta />
        <Title />
        <link rel="canonical" href={canonicalHref} />
        <script async src="https://cdn.ampproject.org/v0.js" />
        <style
          amp-boilerplate=""
          dangerouslySetInnerHTML={{
            __html:
              'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'
          }}
        />
        <noscript>
          <style
            amp-boilerplate=""
            dangerouslySetInnerHTML={{
              __html:
                'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'
            }}
          />
        </noscript>
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{ __html: `${mainCss}${styles}` }}
        />
      </head>
      <body>
        <App static />
      </body>
    </html>
  )
}

export default AmpOutput
