import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeywordMeta } from "./KeywordSearchField";

export interface KeywordProps {
    meta: KeywordMeta;
    className?: string;
    onDismiss: (value: string) => void;
}

const Keyword = (props: KeywordProps) => {
    const { meta, className, onDismiss } = props;
    return (
        <span className={className}>
            <span>{meta.key.substring(0, 1).toUpperCase() + meta.key.substring(1)} {meta.value}</span>
            <FontAwesomeIcon
                fixedWidth
                icon={faTimes}
                onClick={() => onDismiss(meta.key)}
                data-testid={`dismiss-tag-${meta.key}`}
            />
        </span>
    );
}

export default Keyword;
