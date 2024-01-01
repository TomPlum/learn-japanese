import React, { useEffect, useImperativeHandle, useState } from "react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../styles/sass/components/game/Timer.module.scss"

export interface TimerProps {
  className?: string
  pausable?: boolean
  onPaused?: () => void
}

export interface TimerHandle {
  start: () => void
  pause: () => void
  stop: () => void
  restart: () => void
  getCurrentTime: () => string
}


const Timer = React.forwardRef(({ pausable, onPaused, className }: TimerProps, ref: React.Ref<TimerHandle>) => {
  const [start, setStart] = useState(Date.now())
  const [current, setCurrent] = useState(Date.now())
  const interval = React.useRef<NodeJS.Timeout>()
  const [paused, setPaused] = useState(false)
  const [isStopped, setIsStopped] = useState(false)

  const startTimer = () => {
    interval.current = setInterval(tick, 1000)
    setPaused(false)
    setIsStopped(false)
  }

  const stop = () => {
    setPaused(true)
    setIsStopped(true)
    clearInterval(interval.current)
  }

  useImperativeHandle(ref, () => ({
    start: startTimer,
    stop,
    pause,
    restart: () => {
      setStart(Date.now())
      setCurrent(Date.now())
      clearInterval(interval.current) // TODO: Was setInterval(undefined) in state?
      setPaused(false)
      setIsStopped(false)
      startTimer()
    },
    getCurrentTime: () => formatTimeElapsed()
  }))

  const pause = () => {
    console.log('Paused')
    onChangePausedState()
    setPaused(true)
    clearInterval(interval.current)
  }

  const play = () => {
    onChangePausedState()
    interval.current = setInterval(tick, 1000)
    setPaused(false)
  }

  const tick = () => setCurrent(currentValue => currentValue + 1000)

  const onChangePausedState = () => {
    if (onPaused) {
      onPaused()
    }
  }

  const formatTimeElapsed = (): string => {
    const delta = current - start
    const date = new Date(1000 * Math.round(delta / 1000))
    const hours = date.getUTCHours()
    return (hours ? hours + ":" : "") + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds())
  }

  const pad = (value: number) => ("0" + value).slice(-2)

  useEffect(() => {
    startTimer()

    return stop
  }, [])

  return (
    <div className={[className, styles.wrapper].join(" ")}>
      {pausable && !isStopped && (
        <FontAwesomeIcon
          size="sm"
          fixedWidth
          className={styles.icon}
          title={paused ? "Play" : "Pause"}
          icon={paused ? faPlay : faPause}
          onClick={paused ? play : pause}
        />
      )}

      <span className={styles.time}>{formatTimeElapsed()}</span>
    </div>
  )
})

Timer.displayName = 'Timer'

export default Timer
