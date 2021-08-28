import InformationalKanji from "./InformationalKanji";

export interface KanjiWordDisplayProps {
    value: string;
    className?: string;
}

const KanjiWordDisplay = (props: KanjiWordDisplayProps) => {
    return (
        <div>{
            [...props.value].map((char: string) => {
                if (/[一-龯]/.test(char)) {
                    return (
                        <InformationalKanji
                            value={char}
                            key={"display-" + char}
                            className={props.className}
                        />
                    );
                } else {
                    return (
                        <span key={char} className={props.className}>
                            {char}
                        </span>
                    )
                }
            })
        }</div>
    );
}

export default KanjiWordDisplay;
