import { Component } from "react";
import { KanjiRepository } from "../../../repository/KanjiRepository";
import Inspectable from "../Inspectable";
import Copyable from "../Copyable";
import KanjiReadingDisplay from "../../learn/kanji/KanjiReadingDisplay";
import { ReadingType } from "../../../types/kanji/ReadingType";

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
                            <div key={kanji.getValue() + "-popover"}>
                                <KanjiReadingDisplay
                                    type={ReadingType.ON}
                                    readings={kanji.getOnyomiReadings()}
                                    showRomaji={false}
                                />
                                <KanjiReadingDisplay
                                    type={ReadingType.KUN}
                                    readings={kanji.getKunyomiReadings()}
                                    showRomaji={false}
                                />
                            </div>
                        );
                        return (
                            <Copyable className={className} placement="top" key={"copyable" + char} inline>
                                <Inspectable
                                    key={"inspectable-" + char}
                                    className={className}
                                    popover={{ title: kanji.getMeanings().join(", "), text: overlay  }}
                                >
                                    <span key={char}>{char}</span>
                                </Inspectable>
                            </Copyable>
                        )
                    } else {
                        return (
                            <span key={char} className={className}>
                                {char}
                            </span>
                        )
                    }
                })
            }</div>
        );
    }
}

export default KanjiWordDisplay;