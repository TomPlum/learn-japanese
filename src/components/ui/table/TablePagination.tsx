import React from "react";
import Form from "react-bootstrap/esm/Form";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/ui/table/TablePagination.module.scss";

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
                        <Pagination.First onClick={props.onFirstPage} disabled={!props.canPreviousPage} />
                        <Pagination.Prev onClick={props.onPreviousPage} disabled={!props.canPreviousPage} />
                        <Pagination.Item>
                            <span>
                                Page{' '}
                                <strong>
                                    {props.currentPage} of {props.totalPages}
                                </strong>
                            </span>
                        </Pagination.Item>
                        <Pagination.Next onClick={props.onNextPage} disabled={!props.canNextPage} />
                        <Pagination.Last onClick={props.onLastPage} disabled={!props.canNextPage} />
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
