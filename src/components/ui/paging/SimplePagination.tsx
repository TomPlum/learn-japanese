import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../../../styles/sass/components/ui/paging/SimplePagination.module.scss"

export interface SimplePaginationProps {
  page: number
  lastPage: number
  disabled?: boolean
  className?: string
  onPageChange: (page: number) => void
}

const SimplePagination = (props: SimplePaginationProps) => {
  const { page, lastPage, className, disabled, onPageChange } = props

  const disableBackward = page === 0 || disabled
  const disableForward = page === lastPage - 1 || disabled || lastPage === 0
  const backwardClass = disableBackward || disabled ? styles.disabled : styles.button
  const forwardClass = disableForward || disabled ? styles.disabled : styles.button

  const onFirst = () => {
    onPageChange(0)
  }

  const onPrevious = () => {
    onPageChange(page - 1)
  }

  const onNext = () => {
    onPageChange(page + 1)
  }

  const onLast = () => {
    onPageChange(lastPage - 1)
  }

  return (
    <div className={className}>
      <Button onClick={onFirst} variant="dark" disabled={disableBackward} className={backwardClass} title="First">
        <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />
      </Button>

      <Button onClick={onPrevious} variant="dark" disabled={disableBackward} className={backwardClass} title="Prev">
        <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
      </Button>

      <span className={styles.page}>{disabled || lastPage === 0 ? "..." : `${page + 1} of ${lastPage}`}</span>

      <Button onClick={onNext} variant="dark" disabled={disableForward} className={forwardClass} title="Next">
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      </Button>

      <Button onClick={onLast} variant="dark" disabled={disableForward} className={forwardClass} title="Last">
        <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
      </Button>
    </div>
  )
}

export default SimplePagination
