'use strict'

import React from 'react'

import { Static } from '@composition/composer'

import { Clock } from '../clock'

const ServerClock = () => {
  return (
    <Static id="server-clock">
      <Clock />
    </Static>
  )
}

export default ServerClock
