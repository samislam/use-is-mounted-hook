import { useEffect, useRef } from 'react'

/** Detect if the component has been mounted using the useRef method */
export const useIsMountedRef = () => {
  const isMountedRef = useRef(false)
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])
  return isMountedRef
}
