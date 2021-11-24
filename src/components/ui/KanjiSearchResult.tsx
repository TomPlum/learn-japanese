import styles from "../../styles/sass/components/ui/KanjiSearchResult.module.scss";
import { KanjiResult } from "../../service/KanjiService";
import { Simulate } from "react-dom/test-utils";

export interface KanjiSearchResultProps {
    result: KanjiResult;
    search: string;
    style?: {};
    className?: string;
    onClick: () => void;
}

const KanjiSearchResult = (props: KanjiSearchResultProps) => {

    const { result, style, search, className, onClick } = props;

    const getFieldValue = ()  => {
        let matching: string;

        switch (result.field) {
            case "meaning": {
                matching = result.value.getMeanings().find(meaning => meaning.includes(search))!;
                break;
            }
            case "reading": {
                const readings = result.value.readings.map(reading => reading.kana);
                matching = readings.find(reading => reading.includes(search))!;
                break;
            }
            case "tag": {
                matching = result.value.getTags().find(tag => tag.includes(search))!;
                break;
            }
            default: {
                matching = search;
            }
        }

        let startIndex = 0;
        let endIndex = matching.length - 1;
        let valueStartIndex = matching!.indexOf(search);
        let valueEndIndex = valueStartIndex + search.length;

        // If the matching field value is super-long, trim it centered around the matching part
        if (matching.length - search.length >= 10) {
            const revealLength = 4;

            if (valueStartIndex > 4) {
                startIndex  = valueStartIndex - revealLength;
            }

            if (endIndex - valueEndIndex > 4) {
                endIndex = valueEndIndex + revealLength;
            }
        }

        return (
            <span>
                <span>{startIndex !== 0 ? "..." : ""}{matching.substring(startIndex, valueStartIndex)}</span>
                <strong className={styles.matching}>{matching.substring(valueStartIndex, valueEndIndex)}</strong>
                <span>{matching.substring(valueEndIndex, endIndex + 1)}{endIndex !== matching.length - 1 ? "..." : ""}</span>
            </span>
        );
    }

    return (
        <div className={className}>
            <p style={style} onClick={onClick}>
                {result.value.getKanjiVariation()}
            </p>
            {result.field && (
                <p className={styles.field}>{getFieldValue()}</p>
            )}
        </div>
    );
}

export default KanjiSearchResult;
