import styles from "../../../styles/sass/components/ui/loading/SwayingLanternAnimation.module.scss"

export interface LanternLogoProps {
  className?: string
}

const SwayingLanternAnimation = (props: LanternLogoProps) => {
  const { className } = props

  return (
    <div className={[styles["stage"], className].join(" ")} data-testid="lantern-animation">
      <div className={styles["scene"]}>
        <div className={styles["halo"]}>
          <i />
          {/*                    <span className={styles["halo-star"]} />
                    <span className={styles["halo-star"]} />
                    <span className={styles["halo-star"]} />*/}
          <i />
          <i />
          <i />
        </div>
        <div className={styles["lantern"]}>
          <div className={styles["lantern-handle"]} />
          <div className={styles["lantern-inner"]}>
            <div className={styles["lantern-chain"]} />
            <div className={styles["lantern-head"]} />
            <div className={styles["lantern-body"]}>
              <div className={styles["lantern-spark"]} />
              <div className={styles["lantern-spark"]} />
              <div className={styles["lantern-spark"]} />
              <div className={styles["lantern-flame"]} />
            </div>
            <div className={styles["lantern-base"]} />
          </div>
        </div>
        {/*  <div className={styles["planets"]}>
                    <div className={styles["planet"]} />
                    <div className={styles["planet"]} />
                    <div className={styles["planet"]} />
                    <div className={styles["planet"]} />
                    <div className={styles["planet"]} />
                    <div className={styles["planet"]} />
                </div>*/}
      </div>
    </div>
    /*  <div className={styles["stage"]}>
        <div className={styles["scene"]}>
            <div className={styles["halo"]}>
                <i />
                <span className={styles["halo-star"]} />
                <span className={styles["halo-star"]} />
                <span className={styles["halo-star"]} />
                <i />
                <i />
                <i />
            </div>
            <div className={styles["lantern"]}>
                <div className={styles["lantern-handle"]} />
                <div className={styles["lantern-inner"]}>
                    <div className={styles["lantern-chain"]} />
                    <div className={styles["lantern-head"]} />
                    <div className={styles["lantern-body"]}>
                        <div className={styles["lantern-spark"]} />
                        <div className={styles["lantern-spark"]} />
                        <div className={styles["lantern-spark"]} />
                        <div className={styles["lantern-flame"]} />
                    </div>
                    <div className={styles["lantern-base"]} />
                </div>
            </div>
            <div className={styles["planets"]}>
                <div className={styles["planet"]} />
                <div className={styles["planet"]} />
                <div className={styles["planet"]} />
                <div className={styles["planet"]} />
                <div className={styles["planet"]} />
                <div className={styles["planet"]} />
            </div>
        </div>
    </div>*/
  )
}

export default SwayingLanternAnimation
