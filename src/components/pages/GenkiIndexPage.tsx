import GenkiService from "../../service/GenkiService";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/GenkiIndexPage.module.scss";
import SearchField from "../ui/fields/SearchField";
import { faCheckCircle, faCircleNotch, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { AnimatePresence, motion } from "framer-motion";
import Pagination from "../ui/table/Pagination";

interface TableData {
    lesson: number;
    kana: string;
    meaning: string;
    kanji: string;
}

const GenkiIndexPage = () => {

    const service = new GenkiService();
    const data = useRef<TableData[]>([]);

    const columns = useMemo(() => [
        { Header: 'Kana', accessor: 'kana' },
        { Header: 'Kanji', accessor: 'kanji' },
        { Header: 'Meaning', accessor: 'meaning' },
        { Header: 'Lesson', accessor: 'lesson' }
    ], []);

    // @ts-ignore
    const table = useTable({ columns: columns, data: data.current }, useGlobalFilter, useSortBy, usePagination);

    const spring = useMemo(() => ({ type: 'spring', damping: 50, stiffness: 100, }), []);

    const {
        // @ts-ignore
        getTableProps, getTableBodyProps, headerGroups, prepareRow, page, canPreviousPage, canNextPage,
        // @ts-ignore
        pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize, globalFilter },
        // @ts-ignore
        setGlobalFilter, preGlobalFilteredRows
    } = table

    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(globalFilter);

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        service.getAllVocab().then(response => {
            if (response.definitions) {
                data.current = response.definitions.map(it => {
                    return {
                        lesson: it.getLesson(),
                        kana: it.getKana()[0],
                        meaning: it.getMeanings()[0],
                        kanji: it.getKanjiVariation() ?? "-"
                    };
                });
            } else {
                setError(response.error!);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const onSearch = useAsyncDebounce((value: string) => {
        setSearch(value);
        setGlobalFilter(value);
    }, 200);

    return (
        <Container fluid className={styles.wrapper}>

            <Alert variant={!!error ? "danger" : "success"} className={styles.banner}>{
                !error ? <>
                    <FontAwesomeIcon icon={loading ? faCircleNotch : faCheckCircle} className={styles.spinner}
                                     spin={loading}/>
                    <span>{!loading ? `Showing ${data.current.length} definitions from Genki I and II.` : "Loading..."}</span>
                </> : <>
                    <FontAwesomeIcon icon={faExclamationCircle} className={styles.spinner}/>
                    <span>{error}</span>
                </>
            }</Alert>

            <SearchField
                value={search}
                disabled={loading}
                onChange={onSearch}
                className={styles.search}
                append={`${preGlobalFilteredRows?.length ?? 0} Results`}
            />

            {data.current && <>
                <table {...getTableProps()} className={styles.table}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>{
                            headerGroup.headers.map(column => (
                                <motion.th {...column.getHeaderProps({
                                    // @ts-ignore
                                    layoutTransition: spring,
                                    style: { minWidth: column.minWidth }
                                })}>
                                    {column.render('Header')}
                                </motion.th>
                            ))
                        }</tr>
                    ))}
                    </thead>

                    <tbody {...getTableBodyProps()}>
                    <AnimatePresence>{
                        page.map((row: Row<any>) => {
                            prepareRow(row);
                            const colourClass = row.original.lesson < 12 ? styles.genkiOne : styles.genkiTwo;
                            return (
                                <motion.tr {...row.getRowProps({
                                        // @ts-ignore
                                        layoutTransition: spring,
                                        exit: { opacity: 0, maxHeight: 0 }
                                    })} className={colourClass}
                                >{
                                    row.cells.map(cell => {
                                        return (
                                            // @ts-ignore
                                            <motion.td {...cell.getCellProps({ layoutTransition: spring })}>
                                                {cell.render('Cell')}
                                            </motion.td>
                                        )
                                    })
                                }</motion.tr>
                            )
                        })
                    }</AnimatePresence>
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
            </>}
        </Container>
    );
}

export default GenkiIndexPage;
