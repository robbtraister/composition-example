'use strict'

import React, { useEffect, useState } from 'react'

// class Interactive extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { client: false }
//   }
//   componentDidMount () {
//     this.setState({ client: true })
//   }

//   render () {
//     const { client } = this.state
//     return client && <div>Interactive</div>
//   }
// }

function Interactive() {
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    setInteractive(true)
  }, [])

  return interactive && <div>Interactive</div>
}

export default Interactive
