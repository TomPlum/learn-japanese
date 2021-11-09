import GenkiService from "../../service/GenkiService";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import SearchField from "../ui/fields/SearchField";
import { faCheckCircle, faCircleNotch, faExclamationCircle, faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { AnimatePresence, motion } from "framer-motion";
import TablePagination from "../ui/table/TablePagination";
import Copyable from "../ui/Copyable";
import RomajiGenerator from "../../utility/RomajiGenerator";
import styles from "../../styles/sass/components/pages/GenkiIndexPage.module.scss";

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
        { Header: 'Rōmaji', accessor: 'romaji' },
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
        pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, globalFilter },
        // @ts-ignore
        setGlobalFilter, preGlobalFilteredRows
    } = table;

    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(globalFilter ?? "");

    const hasError = !!error;

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        service.getAllVocab().then(response => {
            if (response.definitions) {
                const romajiGenerator = new RomajiGenerator();
                data.current = response.definitions.map(it => {
                    return {
                        lesson: it.getLesson(),
                        kana: it.getKana()[0],
                        romaji: romajiGenerator.generate(it.getKana()[0]),
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

            {hasError && (
                <Alert variant="danger" className={styles.banner}>
                    <FontAwesomeIcon icon={faExclamationCircle} className={styles.spinner} />
                    <span>{error}</span>
                </Alert>
            )}

            {!hasError && !loading && (
                <Alert variant="success" className={styles.banner}>
                    <FontAwesomeIcon spin={loading} icon={faCheckCircle} className={styles.spinner} />
                    <span>{`Showing ${data.current.length} definitions from Genki I and II.`}</span>
                </Alert>
            )}

            {loading && (
                <Alert variant="info">
                    <FontAwesomeIcon spin icon={faCircleNotch} className={styles.spinner} />
                    <span>Loading...</span>
                </Alert>
            )}

            <SearchField
                enableClear
                value={search}
                disabled={loading}
                onChange={onSearch}
                className={styles.search}
                onClear={() => setSearch(undefined)}
                append={`${preGlobalFilteredRows?.length ?? 0} Results`}
                placeholder="Search for a meaning, kana, kanji or lesson"
            />

            {data.current && <>
                <table {...getTableProps()} className={styles.table}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>{
                            headerGroup.headers.map((column: any) => (
                                <motion.th {...column.getHeaderProps({
                                    // @ts-ignore
                                    layoutTransition: spring,
                                    style: { minWidth: column.minWidth },
                                    // @ts-ignore
                                    ...column.getSortByToggleProps()
                                })}>
                                    <span>{column.render('Header')}</span>
                                    <span>{column.isSorted ? column.isSortedDesc ?
                                        <FontAwesomeIcon icon={faSortDown} className={styles.sort} title="Default Order" /> :
                                        <FontAwesomeIcon icon={faSortUp} className={styles.sort} title="Sort Desc" /> :
                                        <FontAwesomeIcon icon={faSort} className={styles.sort} title="Sort Asc" />
                                    }</span>
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
                                                    <Copyable valueProvider={it => it.props.cell.value}>
                                                        <span>{cell.render('Cell')}</span>
                                                    </Copyable>
                                                </motion.td>
                                            )
                                        })
                                    }</motion.tr>
                                )
                            })
                        }</AnimatePresence>
                    </tbody>
                </table>

                <TablePagination
                    onNextPage={nextPage}
                    canNextPage={canNextPage}
                    currentPage={pageIndex + 1}
                    onPreviousPage={previousPage}
                    onFirstPage={() => gotoPage(0)}
                    totalPages={pageOptions.length}
                    canPreviousPage={canPreviousPage}
                    onLastPage={() => gotoPage(pageCount - 1)}
                    onChangeQuantity={(value: number) => setPageSize(value)}
                />
            </>}
        </Container>
    );
}

export default GenkiIndexPage;
