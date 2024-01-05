import React, { useEffect, useImperativeHandle, useState } from "react";

export interface CountDownProps {
  value: number
  className?: string
  onFinish: () => void
}

export interface CountDownHandle {
  stop: () => void
  reset: () => void
}

const CountDown = React.forwardRef(({ value, className, onFinish }: CountDownProps, ref: React.Ref<CountDownHandle>) => {
  const interval = React.useRef<NodeJS.Timeout>()
  const [remaining, setRemaining] = useState(value)

  const reset = () => {
    clearInterval(interval.current)
    setRemaining(value)
    start()
  }

  useImperativeHandle(ref, () => ({
    reset,
    stop: () => {
      clearInterval(interval.current)
    }
  }))

  const decrement = () => {
    if (remaining === 0) {
      onFinish()
      reset()
    } else {
      setRemaining(current => current - 1)
    }
  }

  const start = () => {
    interval.current = setInterval(decrement, 1000)
  }

  useEffect(() => {
    start()

    return () => clearInterval(interval.current)
  })

  return (
    <span className={className} title="Time Remaining">
      {remaining}
    </span>
  )
})

CountDown.displayName = 'CountDown'

export default CountDown
