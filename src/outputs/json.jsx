'use strict'

import React from 'react'

const JsonOutput = ({ children }) => <>[{children}]</>
JsonOutput.contentType = 'application/json'

export default JsonOutput
