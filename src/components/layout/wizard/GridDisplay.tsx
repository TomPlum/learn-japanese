import React, { PropsWithChildren, ReactElement, useState } from "react";
import GridDisplayOptions from "./GridDisplayOptions";
import { GridOptions } from "../../../domain/grid/GridOptions";
import { GridDisplayType } from "../../../domain/grid/GridDisplayType";
import styles from "../../../styles/sass/components/layout/wizard/GridDisplay.module.scss";

export interface GridDisplayProps {
    controls?: boolean;
    className?: string;
}

const GridDisplay = (props: PropsWithChildren<GridDisplayProps>) => {
    const { children, controls, className } = props;

    const [options, setOptions] = useState<GridOptions>({ type: GridDisplayType.GRID, size: 80 });

    return (
        <div className={className}>
            {controls && (
                <GridDisplayOptions onSelect={options => setOptions(options)} />
            )}

            {
                options.type == GridDisplayType.LIST && (
                    React.Children.map(children, (child => {
                        return React.cloneElement(child as ReactElement, {
                            style: { width: "100%", height: 40 }, className: styles.list
                        });
                    }))
                )
            }

            {
                options.type == GridDisplayType.GRID && (
                    React.Children.map(children, (child => {
                        return React.cloneElement(child as ReactElement, {
                            style: { width: options.size, height: options.size }
                        });
                    }))
                )
            }
        </div>
    )
}

export default GridDisplay;
