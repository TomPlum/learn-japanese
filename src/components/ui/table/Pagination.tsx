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


const Pagination = (props: PaginationProps) => {
    return (
        <div className="pagination">
            <button onClick={props.onFirstPage} disabled={!props.canPreviousPage}>
                {'<<'}
            </button>
            {' '}
            <button onClick={props.onPreviousPage} disabled={!props.canPreviousPage}>
                {'<'}
            </button>
            {' '}
            <button onClick={props.onNextPage} disabled={!props.canNextPage}>
                {'>'}
            </button>
            {' '}
            <button onClick={props.onLastPage} disabled={!props.canNextPage}>
                {'>>'}
            </button>
            {' '}
            <span>
          Page{' '}
                <strong>
            {props.currentPage} of {props.totalPages}
          </strong>{' '}
        </span>

            <select
                value={props.totalPages}
                onChange={e => {
                    props.onChangeQuantity(Number(e.target.value))
                }}
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Pagination;
