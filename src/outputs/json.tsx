'use strict'

import React from 'react'

export const JsonOutput = ({ children }) =>
  <>[{
    [].concat(children || [])
      .filter(child => child)
      .map((child, index) =>
        <React.Fragment key={index}>{(index === 0) ? '' : ','}{child}</React.Fragment>
      )
  }]</>

export const contentType = 'application/json'
export const fallbacks = null

export default JsonOutput
