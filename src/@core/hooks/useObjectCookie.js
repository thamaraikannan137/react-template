import { useState, useCallback } from 'react'
import Cookies from 'js-cookie'

export const useObjectCookie = (cookieName, initialValue) => {
  // Try to get the cookie value, if it doesn't exist use initialValue
  const [value, setValue] = useState(() => {
    try {
      const cookie = Cookies.get(cookieName)
      if (cookie) {
        return JSON.parse(cookie)
      }
      
      // If no cookie exists, set it with the initial value
      Cookies.set(cookieName, initialValue)
      
      return JSON.parse(initialValue)
    } catch {
      // If there's any error parsing the cookie, return the initial value
      return JSON.parse(initialValue)
    }
  })

  // Update both the state and the cookie
  const updateValue = useCallback(
    newValue => {
      setValue(newValue)
      Cookies.set(cookieName, JSON.stringify(newValue))
    },
    [cookieName]
  )

  return [value, updateValue]
}

export default useObjectCookie 