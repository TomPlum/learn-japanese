import { useEffect, useState } from "react";
import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiRepository } from "../../../repository/KanjiRepository";
import Copyable from "../Copyable";
import Inspectable from "../Inspectable";
import KanjiReadingDisplay from "../../learn/kanji/KanjiReadingDisplay";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import LoadingSpinner from "../LoadingSpinner";

const InformationalKanji = (props: { value: string, className?: string }) => {
    const [loading, setLoading] = useState(false);
    const [kanji, setKanji] = useState<Kanji>();

    useEffect(() => {
        setLoading(true);

        new KanjiRepository().getByValue(props.value).then(kanji => {
            setLoading(false);
            setKanji(kanji);
        })
    }, []);

    const char = props.value;

    const overlay = (
        <div key={char + "-popover"}>
            <LoadingSpinner active={loading} variant="primary" />

            <KanjiReadingDisplay
                showRomaji={false}
                type={ReadingType.ON}
                readings={kanji?.getOnyomiReadings() ?? []}
            />

            <KanjiReadingDisplay
                showRomaji={false}
                type={ReadingType.KUN}
                readings={kanji?.getKunyomiReadings() ?? []}
            />
        </div>
    );

    const title = kanji?.getMeanings().slice(0, 4).join(", ") ?? "Loading...";

    return (
        <Copyable className={props.className} placement="top" key={"copyable" + kanji?.getValue()} inline>
            <Inspectable key={"inspectable-" +  kanji?.getValue()} className={props.className} popover={{ title: title, text: overlay }}>
                <span key={char}>
                    {char}
                </span>
            </Inspectable>
        </Copyable>
    )
};

export default InformationalKanji;
