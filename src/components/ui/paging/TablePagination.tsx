import React, { ChangeEvent, useState } from "react"
import { Col, Container, Form, Pagination, Row } from "react-bootstrap"
import styles from "../../../styles/sass/components/ui/paging/TablePagination.module.scss"
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface TablePaginationProps {
  currentPage: number
  totalPages: number
  canPreviousPage: boolean
  canNextPage: boolean
  onPreviousPage: () => void
  onNextPage: () => void
  onFirstPage: () => void
  onLastPage: () => void
  onChangeQuantity: (quantity: number) => void
  onToggleFirstBook: (value: boolean) => void
  onToggleSecondBook: (value: boolean) => void
}

const TablePagination = (props: TablePaginationProps) => {
  const [genkiOne, setGenkiOne] = useState(true)
  const [genkiTwo, setGenkiTwo] = useState(true)

  const {
    currentPage,
    totalPages,
    canPreviousPage,
    canNextPage,
    onPreviousPage,
    onNextPage,
    onFirstPage,
    onLastPage,
    onChangeQuantity
  } = props

  const genkiOneClasses = [styles.genki1, !genkiOne ? styles.off : "", styles.book].join(" ")
  const genkiTwoClasses = [styles.genki2, !genkiTwo ? styles.off : "", styles.book].join(" ")

  const onChangeShow = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const quantity = Number(e.target.value)
    onChangeQuantity(quantity)
  }

  const onChangeGenkiOne = () => {
    setGenkiOne(!genkiOne)
    props.onToggleFirstBook(!genkiOne)
  }

  const onChangeGenkiTwo = () => {
    setGenkiTwo(!genkiTwo)
    props.onToggleSecondBook(!genkiTwo)
  }

  const getToggleTitle = (on: boolean) => (on ? "Toggle Off" : "Toggle On")

  const disabled = totalPages === 0

  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={4} md={6} sm={10} xs={12}>
          <Pagination className={styles.pagination}>
            <Pagination.First onClick={onFirstPage} disabled={!canPreviousPage} title="First Page">
              <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />
            </Pagination.First>

            <Pagination.Prev onClick={onPreviousPage} disabled={!canPreviousPage} title="Previous Page">
              <FontAwesomeIcon icon={faChevronLeft} size="sm" fixedWidth />
            </Pagination.Prev>

            <Pagination.Item className={styles.pages} disabled={disabled}>
              {totalPages > 0 && (
                <span>
                  Page{" "}
                  <strong>
                    {currentPage} of {totalPages}
                  </strong>
                </span>
              )}
              {disabled && <span className="text-muted">No Results</span>}
            </Pagination.Item>

            <Pagination.Next onClick={onNextPage} disabled={!canNextPage} title="Next Page">
              <FontAwesomeIcon icon={faChevronRight} size="sm" fixedWidth />
            </Pagination.Next>

            <Pagination.Item onClick={onLastPage} disabled={!canNextPage} title="Last Page">
              <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
            </Pagination.Item>
          </Pagination>
        </Col>

        <Col xl={4} lg={3} xs={0} />

        <Col xl={2} md={3} xs={6} className={styles.middleCol}>
          <Pagination className={styles.bookSelector}>
            <Pagination.Item className={genkiOneClasses} onClick={onChangeGenkiOne} title={getToggleTitle(genkiOne)}>
              Genki I
            </Pagination.Item>
            <Pagination.Item className={genkiTwoClasses} onClick={onChangeGenkiTwo} title={getToggleTitle(genkiTwo)}>
              Genki II
            </Pagination.Item>
          </Pagination>
        </Col>

        <Col lg={2} md={3} xs={6}>
          <Form.Control
            as="select"
            onChange={onChangeShow}
            title="Rows per Page"
            disabled={disabled}
            className={styles.pageSize}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Row>
    </Container>
  )
}

export default TablePagination
