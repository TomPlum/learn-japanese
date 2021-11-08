import React from "react";
import { Col, Container, Pagination, Row, Form } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/table/TablePagination.module.scss";
import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PaginationProps {
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

const TablePagination = (props: PaginationProps) => {

    const onChangeShow = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = Number(e.target.value);
        props.onChangeQuantity(quantity);
    }

    return (
        <Container fluid className={styles.wrapper}>
            <Row>
                <Col md={10} xs={7}>
                    <Pagination className={styles.pagination}>
                        <Pagination.First onClick={props.onFirstPage} disabled={!props.canPreviousPage}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} title="First Page" fixedWidth />
                        </Pagination.First>

                        <Pagination.Prev onClick={props.onPreviousPage} disabled={!props.canPreviousPage}>
                            <FontAwesomeIcon icon={faChevronLeft} size="sm" title="Previous Page" fixedWidth/>
                        </Pagination.Prev>

                        <Pagination.Item>
                            <span>
                                Page{' '}
                                <strong>
                                    {props.currentPage} of {props.totalPages}
                                </strong>
                            </span>
                        </Pagination.Item>

                        <Pagination.Next onClick={props.onNextPage} disabled={!props.canNextPage}>
                            <FontAwesomeIcon icon={faChevronRight} size="sm" title="Next Page" fixedWidth />
                        </Pagination.Next>

                        <Pagination.Item onClick={props.onLastPage} disabled={!props.canNextPage}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} title="Last Page" fixedWidth />
                        </Pagination.Item>
                    </Pagination>
                </Col>

                <Col md={2} xs={5}>
                    <Form.Control as="select" custom onChange={onChangeShow}>
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
