import React, { useEffect, useMemo, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

export const useDebouncedEffect = (effect: () => any, delay: number, deps: any[] = []) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay)

    return () => clearTimeout(handler)
  }, [...(deps || []), delay])
}

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e: { clientX: any; clientY: any }) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", setFromEvent)

    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const setFromEvent = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener("resize", setFromEvent)

    return () => {
      window.removeEventListener("resize", setFromEvent)
    }
  }, [])

  return { width, height }
}

export const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  })

  return ref.current ?? value
}

export const useQueryParams = () => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export const useOnComponentBlur = (ref: React.RefObject<any>, fn: Function) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
