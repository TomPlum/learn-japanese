import { PropsWithChildren } from "react";
import ComponentTree from "../../utility/ComponentTree";
import Arrays from "../../utility/Arrays";

export interface UnderlineStrategy {
    underline: (text: string, underlineClass?: string) => any;
}

/**
 * Underlines the first match of the given string value.
 */
export class FirstMatch implements UnderlineStrategy {
    private readonly _underline: string;

    constructor(underline: string) {
        this._underline = underline;
    }

    underline(text: string, underlineClass?: string) {
        const underlineStartIndex = text.indexOf(this._underline);
        const start = text.substring(0, underlineStartIndex);

        const underlineEndIndex = underlineStartIndex + this._underline.length;
        const underlined = text.substring(underlineStartIndex, underlineEndIndex);
        const remaining = text.substring(underlineEndIndex);

        return (
            <span data-testid="underline-first-match">
                {start}
                <span className={underlineClass}>{underlined}</span>
                {remaining}
            </span>
        );
    }
}

export class MultipleFirstMatch implements UnderlineStrategy {
    private readonly _underline: string[];

    constructor(...underline: string[]) {
        this._underline = underline;
    }

    underline(text: string, underlineClass?: string) {
        const underlineIndices = this._underline.sort((a, b) => text.indexOf(a) - text.indexOf(b)).flatMap(underline => {
            const start = text.indexOf(underline);
            const end = start + underline.length;
            return [start, end];
        }).reverse();

        const elements = [];

        let i = 0;
        while (i < text.length) {
            if (underlineIndices.includes(i)) {
                const startIndex = underlineIndices.pop() ?? 0;
                const endIndex = underlineIndices.pop() ?? text.length - 1;
                const value = text.substring(startIndex, endIndex);
                elements.push(<span className={underlineClass} key={value}>{value}</span>);
                i = endIndex;
            } else {
                const nextUnderline = underlineIndices[underlineIndices.length - 1];
                const value = text.substring(i, nextUnderline);
                elements.push(<span key={value}>{value}</span>);
                i = nextUnderline;
            }
        }

        return <span data-testid="underline-multiple-first-match">{elements}</span>;
    }
}

/**
 * Underlines only the given occurrences of the given string value.
 */
export class Occurrences implements UnderlineStrategy {
    private readonly _underline: string;
    private readonly _occurrences: number[];

    constructor(underline: string, occurrences: number[]) {
        this._underline = underline;
        this._occurrences = occurrences;
    }

    underline(text: string, underlineClass?: string) {
        const occurrenceIndices = this.getOccurrenceIndices(text);
        const nextOccurrenceIndex = Arrays.copy(occurrenceIndices).reverse();
        const response = [];

        let i = 0;

        while (i < text.length - 1) {
            const currentIndexIsUnderlineStart = occurrenceIndices.includes(i);
            const currentOccurrenceIsWanted = this._occurrences.includes(occurrenceIndices.indexOf(i) + 1);

            if (currentIndexIsUnderlineStart && currentOccurrenceIsWanted) {
                const underlineLength = this._underline.length;
                const underlinedText = text.substring(i, i + underlineLength);
                response.push(
                    <span className={underlineClass} key={underlinedText + i}>
                        {underlinedText}
                    </span>
                );
                i += underlineLength;
            } else {
                const occurrenceIndex = nextOccurrenceIndex.pop();
                const nonUnderlinedText = text.substring(i, occurrenceIndex);
                response.push(<span key={nonUnderlinedText + i}>{nonUnderlinedText}</span>)
                i = occurrenceIndex ?? text.length;
            }
        }

        return response;
    }

    private getOccurrenceIndices(text: string): number[] {
        let index = text.indexOf(this._underline);
        let indices = [];
        while (index >= 0) {
            indices.push(index);
            index = text.indexOf(this._underline, index + 1);
        }
        return indices;
    }
}

/**
 * Underlines the entire text with the given class name.
 */
export class Whole implements UnderlineStrategy {
    underline(text: string, underlineClass?: string) {
        return (
            <span className={underlineClass} data-testid="underline-whole">
                {text}
            </span>
        );
    }
}

export interface UnderlineProps {
    strategy?: UnderlineStrategy;
    underlineClass?: string;
}

const Underline = (props: PropsWithChildren<UnderlineProps>) => {
    const { strategy, underlineClass, children } = props;
    const value: string = new ComponentTree(children).getDeepestLeafNode();
    return !!strategy ? strategy.underline(value, underlineClass) : value ?? null;
}

export default Underline;
