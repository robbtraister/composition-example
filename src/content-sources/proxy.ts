'use strict'

export function resolve(query) {
  return `http://localhost:8080/api/content/fetch?source=echo&query=${encodeURIComponent(
    JSON.stringify(query)
  )}`
}
