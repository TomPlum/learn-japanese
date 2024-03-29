import SwayingLanternAnimation from "../../ui/loading/SwayingLanternAnimation"
import styles  from "./LoadingScreen.module.scss"
import { useEffect, useState } from "react"
import { Fade } from "react-bootstrap"
import Arrays from "../../../utility/Arrays"

const LoadingScreen = (props: { active: boolean }) => {
  const [takingTooLong, setTakingTooLong] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTakingTooLong(true)
    }, 15000)
  }, [])

  const messages = [
    "Fending off the Duolingo owls...",
    "Loading the most difficult kanji we can find...",
    "Confirming if you are 日本語上手..."
  ]

  if (props.active) {
    return (
      <Fade appear in timeout={500}>
        <div className={styles.wrapper} data-testid="loading-screen">
          <SwayingLanternAnimation />

          <span className={styles.message}>
            {takingTooLong && (
              <Fade appear in timeout={500}>
                <span>
                  {"Something is taking a long time to load. You may keep waiting or "}
                  <a href="/home" className={styles.link}>
                    click here
                  </a>
                  {" to go back."}
                </span>
              </Fade>
            )}

            {!takingTooLong && <span>{Arrays.getRandomObject(messages)[0]}</span>}
          </span>
        </div>
      </Fade>
    )
  }

  return null
}

export default LoadingScreen
