import { useEffect } from 'react'

export const ScrollClear = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
