import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedo, faSearchMinus, faSpinner, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import LoadingSpinner from "../../loading/LoadingSpinner"
import styles  from "./EmptyTableBody.module.scss"

export interface EmptyTableBodyProps {
  empty: boolean
  error?: string
  loading: boolean
  className?: string
  emptyMessage: string
  onRetry?: () => void
}

const EmptyTableBody = (props: EmptyTableBodyProps) => {
  const { empty, error, loading, emptyMessage, className, onRetry } = props

  const showEmpty = !error && !loading && empty
  const showLoading = loading
  const showError = error

  const wrapperClassName = showEmpty || showLoading || showError ? styles.noResults : ""

  return (
    <div className={[wrapperClassName, className].join(" ")} data-testid="empty-table-body">
      {showError && (
        <div className={styles.emptyWrapper}>
          <p className={styles.failureMessage}>
            <FontAwesomeIcon fixedWidth size="sm" icon={faTimesCircle} className={styles.icon} />
            <span>Error Loading Data</span>
          </p>
          <Button onClick={onRetry} disabled={loading} className={styles.retry} variant="outline-warning">
            <FontAwesomeIcon
              size="sm"
              fixedWidth
              spin={loading}
              className={styles.icon}
              icon={loading ? faSpinner : faRedo}
            />
            <span>Retry</span>
          </Button>
        </div>
      )}

      {showEmpty && (
        <div className={styles.emptyWrapper}>
          <FontAwesomeIcon fixedWidth size="sm" className={styles.icon} icon={faSearchMinus} />
          {<span>{emptyMessage}</span>}
        </div>
      )}

      {showLoading && (
        <div className={styles.emptyWrapper}>
          <LoadingSpinner variant="light" active={loading} />
          <span>Loading...</span>
        </div>
      )}
    </div>
  )
}

export default EmptyTableBody
