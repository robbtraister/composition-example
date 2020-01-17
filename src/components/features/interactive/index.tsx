'use strict'

import React /*, { useEffect, useState } */ from 'react'

// function Interactive() {
//   const [interactive, setInteractive] = useState(false)

//   useEffect(() => {
//     setInteractive(true)
//   }, [])

//   return interactive && <div>Interactive</div>
// }

class Interactive extends React.Component<{}, { interactive: boolean }> {
  constructor(props) {
    super(props)
    this.state = { interactive: false }
  }

  componentDidMount() {
    this.setState({ interactive: true })
  }

  render() {
    return this.state.interactive && <div>Interactive</div>
  }
}

export default Interactive
