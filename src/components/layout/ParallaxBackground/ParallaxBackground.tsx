import { useEffect, useState } from "react"
import { Kana } from "../../../domain/kana/Kana"
import styles  from "./ParallaxBackground.module.scss"
import Arrays from "../../../utility/Arrays"
import { v4 } from "uuid"
import { useWindowDimensions } from "../../../hooks"

interface ParallaxBackgroundProps {
  kana: Kana[]
}

const ParallaxBackground = (props: ParallaxBackgroundProps) => {
  const [kana, setKana] = useState<Kana[]>([])
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    setKana(Arrays.shuffle(getBackgroundKana()))
  }, [])

  const getBackgroundKana = () => {
    const kana: Kana[] = []

    const html = document.querySelector("html")
    const pool = [...props.kana]

    if (pool.length > 0 && html) {
      //Calculate the width & height of the viewport in em.
      const fontSize = getComputedStyle(html).fontSize
      const widthEm = width / parseFloat(fontSize)
      const heightEm = height / parseFloat(fontSize)

      //Calculate how many kana fit on a single row, the number of rows and the total required.
      const kanaPerRow = Math.ceil(widthEm / 5)
      const rows = Math.ceil(heightEm / 5) + 1
      const totalKanaRequired = kanaPerRow * rows

      if (totalKanaRequired > pool.length) {
        //There are 214 kana. If more is needed, find out how many more and push them.
        const pools = Math.floor(totalKanaRequired / pool.length)
        for (let i = 0; i < pools; i++) {
          kana.push(...pool)
        }

        //If the number of pools is fractional, push one more row in.
        const remaining = totalKanaRequired % pool.length
        if (remaining !== 0) {
          kana.push(...pool.splice(0, kanaPerRow))
        }
      } else {
        kana.push(...pool.splice(0, totalKanaRequired))
      }
    }

    return kana
  }

  return (
    <ul className={styles.background}>
      {kana.map((kana) => {
        return (
          <li key={v4().valueOf()}>
            <span data-testid="background-kana">{kana.code}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default ParallaxBackground
