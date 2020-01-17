'use strict'

import React from 'react'

import SparseOutput from './sparse'

// we have to render the full tree in order to populate cache
const JsonOutput = () => {
  return <SparseOutput />
}

export const contentType = 'application/json'
// export const fallbacks = null

export function transform(_, context) {
  return context
}

export default JsonOutput
