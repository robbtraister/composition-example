'use strict'

import React from 'react'

import Common from '../common'

import { Provider } from '~/contexts/theme'

const DarkLayout = (props) =>
  <Provider value={{ theme: 'dark' }}>
    <Common {...props} />
  </Provider>

export default DarkLayout
