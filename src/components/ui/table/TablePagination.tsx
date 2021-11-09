import React from "react";
import { Col, Container, Pagination, Row, Form } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/table/TablePagination.module.scss";
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TablePaginationProps {
    currentPage: number;
    totalPages: number;
    canPreviousPage: boolean;
    canNextPage: boolean;
    onPreviousPage: () => void;
    onNextPage: () => void;
    onFirstPage: () => void;
    onLastPage: () => void;
    onChangeQuantity: (quantity: number) => void;
}

const TablePagination = (props: TablePaginationProps) => {

    const {
        currentPage, totalPages, canPreviousPage, canNextPage, onPreviousPage, onNextPage, onFirstPage,
        onLastPage, onChangeQuantity
    } = props;

    const onChangeShow = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = Number(e.target.value);
        onChangeQuantity(quantity);
    }

    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col md={10} xs={7}>
                    <Pagination className={styles.pagination}>
                        <Pagination.First onClick={onFirstPage} disabled={!canPreviousPage} title="First Page">
                            <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />
                        </Pagination.First>

                        <Pagination.Prev onClick={onPreviousPage} disabled={!canPreviousPage} title="Previous Page">
                            <FontAwesomeIcon icon={faChevronLeft} size="sm" fixedWidth/>
                        </Pagination.Prev>

                        <Pagination.Item>
                            {totalPages > 0 && <span>Page{' '}<strong>{currentPage} of {totalPages}</strong></span>}
                            {totalPages === 0 && <span className="text-muted">No Results</span>}
                        </Pagination.Item>

                        <Pagination.Next onClick={onNextPage} disabled={!canNextPage} title="Next Page">
                            <FontAwesomeIcon icon={faChevronRight} size="sm" fixedWidth />
                        </Pagination.Next>

                        <Pagination.Item onClick={onLastPage} disabled={!canNextPage} title="Last Page">
                            <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
                        </Pagination.Item>
                    </Pagination>
                </Col>

                <Col md={2} xs={5}>
                    <Form.Control as="select" custom onChange={onChangeShow} title="Rows per Page">
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>


        </Container>
    );
}

export default TablePagination;
