import { useEffect, useState } from 'react'

/** Detect if the component has been mounted using the useState method */
export const useIsMountedState = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted
}
