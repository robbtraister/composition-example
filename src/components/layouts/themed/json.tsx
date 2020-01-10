'use strict'

import React from 'react'

export const JsonLayout = ({ children }) => {
  return <>[{
    [].concat(children || [])
      .filter(child => child)
      .map((child, index) =>
        <React.Fragment key={index}>{(index === 0) ? '' : ','}{child}</React.Fragment>
      )
  }]</>
}

export default JsonLayout
