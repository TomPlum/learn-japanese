import styles from "../../../styles/sass/components/layout/editor/EditorColumn.module.scss";
import React, { useCallback, useState } from "react";
import EditorCard from "./EditorCard";

export type CardSize = 'sm' | 'md' | 'lg';

export interface CardLayoutDetails {
    name: string;
    size: CardSize;
    className?: string;
}

export interface EditorColumnProps {
    defaultCards?: CardLayoutDetails[];
    className?: string;
}

const EditorColumn = (props: EditorColumnProps) => {

    const { defaultCards, className } = props;

    const [dropping, setDropping] = useState(false);
    const [cards, setCards] = useState<CardLayoutDetails[]>(defaultCards ?? []);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        setDropping(false);
        const details = JSON.parse(event.dataTransfer.getData("card"));
        setCards(existing => existing.concat({ name: details.name, size: details.size }))
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        setDropping(true);
        event.preventDefault();
    }

    const handleDragExit = (event: React.DragEvent<HTMLDivElement>) => {
        setDropping(false);
        event.preventDefault();
    }

    const handleDragStart = (details: CardLayoutDetails) => {
        setCards(existing => existing.map(card => {
            if (card.name === details.name) {
                return { ...card, className: styles.hidden };
            }
            return card;
        }));
    }

    const classes = [className, styles.container];
    if (dropping) classes.push(styles.dropping);

    return (
        <div className={classes.join(" ")} onDrop={handleDrop} onDragOver={handleDragOver} onDragExit={handleDragExit}>
            {cards.map((card: CardLayoutDetails) =>
                <EditorCard
                    name={card.name}
                    size={card.size}
                    className={card.className}
                    onDragStart={handleDragStart}
                />
            )}
        </div>
    );
}

export default EditorColumn;
