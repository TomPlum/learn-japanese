import styles  from "./TextLoading.module.scss"
import { PropsWithChildren } from "react"
import { Fade } from "react-bootstrap"

export interface TextLoadingProps {
  active: boolean
}

const TextLoading = (props: PropsWithChildren<TextLoadingProps>) => {
  const { children, active } = props

  if (active) {
    return (
      <Fade in appear data-testid="text-loading">
        <div className={styles.container}>
          <div className={styles.shimmer}>
            <div className={styles.first} />
            <div className={styles["mask-two"]} />
            <div className={styles.second} />
            <div className={styles["mask-one"]} />
            <div className={styles["mask-three"]} />
          </div>
        </div>
      </Fade>
    )
  }

  return <>{children}</>
}

export default TextLoading
