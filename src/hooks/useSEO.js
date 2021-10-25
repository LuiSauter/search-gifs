import { useEffect, useRef } from 'react'

export const useSEO = ({ title, description }) => {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

  useEffect(() => {
    const previoustitle = prevTitle.current
    if (title) {
      document.title = `${title} | Gif`
    }
    return () => {
      document.title = previoustitle
    }
  }, [title])

  useEffect(() => {
    const previousDescription = prevDescription.current
    const metaDescription = document.querySelector('meta[name="description"]')
    if (description) {
      metaDescription.setAttribute('content', description)
    }
    return () => {
      metaDescription.setAttribute('content', previousDescription)
    }
  }, [description])
}
