'use strict'

import { createContext, useContext } from 'react'

const themeContext = createContext({ theme: 'light' })
export const { Consumer, Provider } = themeContext

export function useTheme () {
  const { theme } = useContext(themeContext)
  return theme
}

export default themeContext
