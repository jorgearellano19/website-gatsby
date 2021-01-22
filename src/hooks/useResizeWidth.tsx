import { useEffect, useState } from 'react'

const getWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0)

const getSizeType = (newWidth: number) => {
  if (newWidth < 576) {
    return 'xs'
  }
  if (newWidth < 768) {
    return 'sm'
  }
  if (newWidth < 992) {
    return 'md'
  }
  if (newWidth < 1200) {
    return 'lg'
  }
  return 'xl'
}

const MOBILE_WIDTH = 768

export default function useResizeWidth() {
  const [width, setWidth] = useState(getWidth())
  const [screenType, setScreenType] = useState(getSizeType(width))
  const [isMobile, setMobile] = useState(false)
  const handleSetWidth = () => {
    const newWidth = getWidth()
    setWidth(newWidth)
    setScreenType(getSizeType(newWidth))
    setMobile(newWidth < MOBILE_WIDTH)
  }
  useEffect(() => {
    handleSetWidth()

    window.addEventListener('resize', handleSetWidth)
    return () => window.removeEventListener('resize', handleSetWidth)
  }, [])

  return { width, screenType, isMobile }
}
