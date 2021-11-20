import { Kanji } from "../../domain/kanji/Kanji";

export interface KanjiSearchResultProps {
    value: Kanji;
    className?: string;
    style?: {};
    onClick: () => void;
}

const KanjiSearchResult = (props: KanjiSearchResultProps) => {
    return (
        <div className={props.className}>
            <span style={props.style} title="Select" onClick={props.onClick}>
                {props.value.getKanjiVariation()}
            </span>
        </div>
    );
}

export default KanjiSearchResult;
