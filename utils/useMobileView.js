import { useState, useEffect } from 'react'
import throttle from 'lodash/fp/throttle'

function getMobileView() {
  return window.innerWidth < 768
}

export default () => {
  const [mobileView, setMobileView] = useState(0)

  const handleResize = throttle(250, () => {
    setMobileView(getMobileView())
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setMobileView(getMobileView())
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return mobileView
}