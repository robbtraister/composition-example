'use strict'

import React from 'react'

import SparseFormat from './sparse'

function tagify(key) {
  return key.replace(/[{}":, ]/g, '_')
}

function xmlify(value) {
  return value instanceof Array
    ? value.map(xmlify).join('')
    : value instanceof Object
    ? Object.entries(value)
        .map(([k, v]) => [tagify(k), xmlify(v)])
        .filter(([k, v]) => v !== undefined)
        .map(([k, v]) => `<${k}>${v}</${k}>`)
        .join('')
    : `${value}`
}

function decircularize(data, includeFunctions = false) {
  const cache = []
  return JSON.parse(
    JSON.stringify(data, (_, value) => {
      if (value instanceof Object) {
        if (cache.indexOf(value) >= 0) {
          return
        }
        cache.push(value)

        if (includeFunctions && value instanceof Function) {
          return Object.keys(value).reduce((obj, key) => {
            obj[key] = value[key]
            return obj
          }, {})
        }
      }

      return value
    })
  )
}

// we have to render the full tree in order to populate cache
const XmlFormat = () => {
  return <SparseFormat />
}

export const contentType = 'application/xml'
// export const fallbacks = null

export function transform(_, context) {
  return xmlify({ root: decircularize(context) })
}

export default XmlFormat
