'use strict'

import React from 'react'

const ErrorImpl = props => {
  throw new Error('error component')
}

const ErrorComp = () => <ErrorImpl />

export default ErrorComp
