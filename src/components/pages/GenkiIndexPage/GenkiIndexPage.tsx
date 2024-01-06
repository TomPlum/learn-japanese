import GenkiService from "../../../service/GenkiService"
import { useEffect, useMemo, useRef, useState } from "react"
import { Alert, Container } from "react-bootstrap"
import SearchField from "../../ui/fields/SearchField"
import {
  faCheckCircle,
  faCircleNotch,
  faExclamationCircle,
  faSort,
  faSortDown,
  faSortUp
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Row,
  getPaginationRowModel as paginationModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  Header, Cell, flexRender, getCoreRowModel, ColumnDef
} from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion"
import TablePagination from "../../ui/paging/TablePagination"
import Copyable from "../../ui/Copyable"
import RomajiGenerator from "../../../utility/RomajiGenerator"
import styles  from "./GenkiIndexPage.module.scss"
import Arrays from "../../../utility/Arrays"
import EmptyTableBody from "../../ui/table/EmptyTableBody"

interface TableData {
  lesson: number
  kana: string
  meaning: string
  kanji: string
}

const GenkiIndexPage = () => {
  const service = new GenkiService()
  const originalData = useRef<TableData[]>([])
  const data = useRef<TableData[]>([])

  const columns = useMemo<ColumnDef<TableData>[]>(() => [
      { id: "kana", header: "Kana", accessorKey: "kana" },
      { id: "romaji", header: "Rōmaji", accessorKey: "romaji" },
      { id: "kanji", header: "Kanji", accessorKey: "kanji" },
      { id: "meaning", header: "Meaning", accessorKey: "meaning" },
      { id: "lesson", header: "Lesson", accessorKey: "lesson", width: 20 }
  ], [])

  const {
    getHeaderGroups,
    getCanPreviousPage,
    getCanNextPage,
    getRowModel,
    getPageOptions,
    nextPage,
    setPageIndex,
    previousPage,
    setPageSize,
    getPageCount,
    getState,
    setGlobalFilter
  } = useReactTable({
    columns: columns,
    data: useMemo(() => data.current, [data.current]),
    // defaultColumn: [columnHelper.display({ id: 'actions', minSize: 50, maxSize: 300 })],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: paginationModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  const { globalFilter, pagination } = getState()

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(globalFilter ?? "")
  const [error, setError] = useState<string | undefined>(undefined)

  const hasError = !!error

  useEffect(() => {
    loadTableData()
  }, [])

  const loadTableData = () => {
    setLoading(true)
    setError(undefined)

    service
      .getAllVocab()
      .then((response) => {
        if (response.definitions) {
          const romajiGenerator = new RomajiGenerator()
          const convertedData = response.definitions.map((it) => {
            return {
              lesson: it.getLesson(),
              kana: it.getKana()[0],
              romaji: romajiGenerator.generate(it.getKana()[0]),
              meaning: it.getMeanings()[0],
              kanji: it.getKanjiVariation() ?? "-"
            }
          })
          data.current = convertedData
          originalData.current = Arrays.copy(convertedData)
        } else {
          setError(response.error!)
        }
      })
      .catch((response) => {
        setError(response.error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onGlobalFilter = (value: string) => setGlobalFilter(value)

  const onToggleFirstBook = (enabled: boolean) => {
    if (enabled) {
      data.current = originalData.current
    } else {
      data.current = originalData.current.filter((it) => it.lesson <= 12)
    }
  }

  const onToggleSecondBook = (enabled: boolean) => {
    if (enabled) {
      data.current = originalData.current
    } else {
      data.current = originalData.current.filter((it) => it.lesson >= 13)
    }
  }

  return (
    <Container fluid className={styles.wrapper} data-testid='genki-index-page'>
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
        disabled={loading || !!error}
        className={styles.search}
        append={`${getRowModel().rows.length} Results`}
        onChange={(value: string) => {
          setSearch(value)
          onGlobalFilter(value)
        }}
        onClear={() => {
          setSearch("")
          onGlobalFilter("")
        }}
        placeholder="Search for a meaning, kana, kanji or lesson"
      />

      {data.current && (
        <>
          <table className={styles.table}>
            <thead>
              {getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header: Header<TableData, unknown>) => (
                    <motion.th key={header.id} onClick={() => header.column.getToggleSortingHandler()}>
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>

                      <span>
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() == "desc" ? (
                            <FontAwesomeIcon
                              icon={faSortDown}
                              title="Default Order"
                              className={styles.sort}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faSortUp}
                              title="Sort Desc"
                              className={styles.sort}
                            />
                          )
                        ) : (
                          <FontAwesomeIcon
                            icon={faSort}
                            title="Sort Asc"
                            className={styles.sort}
                          />
                        )}
                      </span>
                    </motion.th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              <AnimatePresence>
                {getRowModel().rows.map((row: Row<TableData>) => {
                  const colourClass = row.original.lesson < 12 ? styles.genkiOne : styles.genkiTwo
                  return (
                    <motion.tr key={row.id} className={colourClass}>
                      {row.getVisibleCells().map((cell: Cell<TableData, any>) => {
                        return (
                          <motion.td key={cell.id}>
                            <Copyable valueProvider={({ props }) => props.cell.getValue()}>
                              <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                            </Copyable>
                          </motion.td>
                        )
                      })}
                    </motion.tr>
                  )
                })}
              </AnimatePresence>
            </tbody>
          </table>

          <EmptyTableBody
            error={error}
            loading={loading}
            onRetry={loadTableData}
            empty={getRowModel().rows.length === 0}
            emptyMessage={`No results for '${search}'...`}
          />

          <TablePagination
            onNextPage={nextPage}
            onPreviousPage={previousPage}
            canNextPage={getCanNextPage()}
            onFirstPage={() => setPageIndex(0)}
            totalPages={getPageOptions().length}
            onToggleFirstBook={onToggleFirstBook}
            currentPage={pagination.pageIndex + 1}
            canPreviousPage={getCanPreviousPage()}
            onToggleSecondBook={onToggleSecondBook}
            onLastPage={() => setPageIndex(getPageCount() - 1)}
            onChangeQuantity={(value: number) => setPageSize(value)}
          />
        </>
      )}
    </Container>
  )
}

export default GenkiIndexPage
