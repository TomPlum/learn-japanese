import styles from "../../../styles/sass/components/ui/table/GenkiTable.module.scss";
import { Table } from "react-bootstrap";
import { PropsWithChildren } from "react";

export interface GenkiTableProps {
    chapter: number;
    className?: string;
}

const GenkiTable = (props: PropsWithChildren<GenkiTableProps>) => {

    const { children, chapter, className } = props;

    const borderClass = chapter <= 12 ? styles.genkiOne : styles.genkiTwo;

    return (
        <div className={[styles.wrapper, borderClass, className].join(" ")}>
            <Table className={styles.table} borderless size="sm">
                {children}
            </Table>
        </div>
    );
}

export default GenkiTable;
