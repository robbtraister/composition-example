'use strict'

import React from 'react'

import SparseFormat from './sparse'

// we have to render the full tree in order to populate cache
const JsonFormat = () => {
  return <SparseFormat />
}

export const contentType = 'application/json'
// export const fallbacks = null

export function transform(_, context) {
  return context
}

export default JsonFormat
