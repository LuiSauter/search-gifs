import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '0px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }
    // Resolver el valor si o si
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      observer.observe(fromRef.current)
    })
    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
