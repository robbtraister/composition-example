'use strict'

import React, { useState, useEffect } from 'react'

const Environment = typeof window === 'undefined' ? 'Server' : 'Client'

export const Clock = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => setCount(count + 1), 1000)

    return () => clearTimeout(interval)
  }, [count])

  return (
    <div>
      {Environment} Time: {+new Date()}
    </div>
  )
}

export default Clock
