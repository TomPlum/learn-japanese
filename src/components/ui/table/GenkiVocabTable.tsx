import { Row, usePagination, useTable } from "react-table";
import Pagination from "./Pagination";
import { useMemo } from "react";
import styles from "../../../styles/sass/components/ui/table/GenkiVocabTable.module.scss";

export interface TableData {
    lesson: number;
    kana: string;
    meaning: string;
    kanji: string;
}

export interface GenkiVocabTableProps {
    data: TableData[];
}

const GenkiVocabTable = (props: GenkiVocabTableProps) => {

    const columns = useMemo(() => [
        { Header: 'Kana', accessor: 'kana' },
        { Header: 'Kanji', accessor: 'kanji' },
        { Header: 'Meaning', accessor: 'meaning' },
        { Header: 'Lesson', accessor: 'lesson' }
    ], []);

    // @ts-ignore
    const table = useTable({ columns: columns, data: props.data }, usePagination);

    const {
        // @ts-ignore
        getTableProps, getTableBodyProps, headerGroups, prepareRow, page, canPreviousPage, canNextPage,
        // @ts-ignore
        pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize }
    } = table

    return (
        <div className={styles.wrapper}>
            <table {...getTableProps()} className={styles.table}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>

                <tbody {...getTableBodyProps()}>
                {
                    page.map((row: Row<any>) => {
                        prepareRow(row);
                        const colourClass = row.original.lesson < 12 ? styles.genkiOne : styles.genkiTwo;
                        return (
                            <tr {...row.getRowProps()} className={colourClass}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <Pagination
                currentPage={pageIndex + 1}
                totalPages={pageOptions.length}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                onPreviousPage={previousPage}
                onNextPage={nextPage}
                onFirstPage={() => gotoPage(0)}
                onLastPage={() => gotoPage(pageCount - 1)}
                onChangeQuantity={(value: number) => setPageSize(value)}
            />
        </div>
    );
}

export default GenkiVocabTable;
