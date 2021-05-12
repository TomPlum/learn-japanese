import { Component } from "react";
import { KanjiRepository } from "../../repository/KanjiRepository";
import Inspectable from "./Inspectable";
import Copyable from "./Copyable";
import KanjiReadingDisplay from "../learn/kanji/KanjiReadingDisplay";
import { ReadingType } from "../../types/kanji/ReadingType";

export interface KanjiWordDisplayProps {
    value: string;
    className?: string;
}

class KanjiWordDisplay extends Component<KanjiWordDisplayProps> {
    render() {
        const { value, className } = this.props;
        
        const repository = new KanjiRepository();
        
        return (
            <div>{
                [...value].map((char: string) => {
                    const kanji = repository.getByValue(char);
                    if (kanji) {
                        const overlay = (
                            <div>
                                <KanjiReadingDisplay
                                    type={ReadingType.ON}
                                    readings={kanji.readings.filter(it => it.type === ReadingType.ON)}
                                    showRomaji={false}
                                />
                                <KanjiReadingDisplay
                                    type={ReadingType.KUN}
                                    readings={kanji.readings.filter(it => it.type === ReadingType.KUN)}
                                    showRomaji={false}
                                />
                            </div>
                        );
                        return (
                            <Copyable className={className} placement="top" inline>
                                <Inspectable popover={{ title: kanji.meanings.join(", "), text: overlay  }} className={className}>
                                    <span>{char}</span>
                                </Inspectable>
                            </Copyable>
                        )
                    } else {
                        return <span className={className}>{char}</span>
                    }
                })
            }</div>
        );
    }
}

export default KanjiWordDisplay;