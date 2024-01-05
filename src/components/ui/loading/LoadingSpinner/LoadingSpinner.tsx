import { Spinner } from "react-bootstrap"
import styles  from "./LoadingSpinner.module.scss"
import { Variant } from "react-bootstrap/types"

export interface LoadingSpinnerProps {
  active: boolean
  className?: string
  variant?: Variant
  size?: string
  thickness?: string
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { active, variant, className, size, thickness } = props

  if (active) {
    return (
      <div className={className}>
        <Spinner
          role="status"
          title="Loading"
          animation="border"
          className={styles.spinner}
          variant={variant ?? "primary"}
          style={{ width: size, height: size, fontSize: thickness }}
        />
      </div>
    )
  }
  return null
}

export default LoadingSpinner
