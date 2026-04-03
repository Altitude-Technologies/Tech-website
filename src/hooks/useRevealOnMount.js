import { useEffect, useRef } from 'react'

/**
 * Immediately reveals fade-up elements inside the returned ref —
 * used for above-the-fold page headers that are visible on load.
 */
export function useRevealOnMount() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const timer = setTimeout(() => {
      root.querySelectorAll('.fade-up').forEach((el) => el.classList.add('fade-up-visible'))
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return ref
}
