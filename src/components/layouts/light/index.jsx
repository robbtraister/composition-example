'use strict'

import React from 'react'

import Common from '../common'

import { Provider } from '~/contexts/theme'

const LightLayout = (props) =>
  <Provider value={{ theme: 'light' }}>
    <Common {...props} />
  </Provider>

export default LightLayout
