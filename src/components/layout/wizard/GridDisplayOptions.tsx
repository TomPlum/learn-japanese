import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faThList } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { GridDisplayType } from "../../../domain/grid/GridDisplayType";
import { GridOptions } from "../../../domain/grid/GridOptions";
import RangeSlider from "react-bootstrap-range-slider";
import styles from "../../../styles/sass/components/layout/wizard/GridDisplayOptions.module.scss";
import { Col, Row } from "react-bootstrap";

export interface GridDisplayOptionsProps {
    onSelect: (options: GridOptions) => void;
    className?: string;
}

const GridDisplayOptions = (props: GridDisplayOptionsProps) => {

    const { className, onSelect } = props;

    const [type, setType] = useState(GridDisplayType.GRID);
    const [size, setSize] = useState(80);

    useEffect(() => {
        onSelect({ type: type, size: size });
    }, [type, size]);

    const onGridItemSizeChange = (e: React.ChangeEvent, value: number) => {
        setSize(value);
    }

    const gridButtonClass = type === GridDisplayType.GRID ? styles.selected : styles.button;
    const listButtonClass = type === GridDisplayType.LIST ? styles.selected : styles.button;

    return (
        <div className={className} data-testid="grid-display-options">
            <Row>
                <Col>
                    <RangeSlider
                        min={70}
                        max={150}
                        step={10}
                        size="sm"
                        value={size}
                        title="Item Size"
                        className={styles.size}
                        onChange={onGridItemSizeChange}
                    />
                </Col>
                <Col className={styles.buttonWrapper}>
                    <FontAwesomeIcon
                        fixedWidth
                        icon={faThLarge}
                        title="Grid Layout"
                        className={gridButtonClass}
                        onClick={() => setType(GridDisplayType.GRID)}
                    />

                    <FontAwesomeIcon
                        fixedWidth
                        icon={faThList}
                        title="List Layout"
                        className={listButtonClass}
                        onClick={() => setType(GridDisplayType.LIST)}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default GridDisplayOptions;