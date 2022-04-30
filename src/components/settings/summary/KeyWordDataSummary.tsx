import React from "react";

export interface KeyWordDataSummaryProps {
    words: string[];
    className?: string;
}

const KeyWordDataSummary = (props: KeyWordDataSummaryProps) => {
    const { words, className } = props;

    return (
        <span>
            {
                words.map((word: string, i: number) => {
                    if (i < words.length - 2) {
                        return (<><span className={className}>{word}</span><span>{", "}</span></>);
                    } else if (i < words.length - 1 || words.length === 1) {
                        return (<span className={className}>{word}</span>);
                    } else {
                        return (<><span>{" and "}</span><span className={className}>{word}</span></>);
                    }
                })
            }
        </span>
    );
}

export default KeyWordDataSummary;
