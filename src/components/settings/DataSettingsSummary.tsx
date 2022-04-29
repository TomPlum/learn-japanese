import DataSettings from "../../domain/session/settings/data/DataSettings";
import KanaSettings from "../../domain/session/settings/data/KanaSettings";
import KanjiSettings from "../../domain/session/settings/data/KanjiSettings";
import NumbersSettings from "../../domain/session/settings/data/NumbersSettings";
import SentenceStructureSettings from "../../domain/session/settings/data/SentenceStructureSettings";
import CalendarSettings from "../../domain/session/settings/data/CalendarSettings";
import BasicsSettings from "../../domain/session/settings/data/BasicsSettings";
import styles from "../../styles/sass/components/settings/DataSettingsSummary.module.scss";
import hiragana from "../../data/Hiragana";

export interface DataSettingsSummaryProps {
    settings: DataSettings;
}

const DataSettingsSummary = (props: DataSettingsSummaryProps) => {
    const { settings } = props;

    const className = styles.word;

    const isKanaSettings = (settings: DataSettings): settings is KanaSettings => {
        return (settings as KanaSettings).onlyDiagraphs !== undefined;
    }

    const isKanjiSettings = (settings: DataSettings): settings is KanjiSettings => {
        return (settings as KanjiSettings).grades !== undefined;
    }

    const isNumbersSettings = (settings: DataSettings): settings is NumbersSettings => {
        return (settings as NumbersSettings).sequence !== undefined;
    }

    const isSentenceStructureSettings = (settings: DataSettings): settings is SentenceStructureSettings => {
        return (settings as SentenceStructureSettings).particles !== undefined;
    }

    const isCalendarSettings = (settings: DataSettings): settings is CalendarSettings => {
        return (settings as CalendarSettings).phrases !== undefined;
    }

    const isBasicsSettings = (settings: DataSettings): settings is BasicsSettings => {
        return (settings as BasicsSettings).weather !== undefined;
    }

    const parseWords = (words: string[]) => {
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

    if (isKanaSettings(settings)) {
        const hasHiragana = settings.hiragana;
        const hasKatakana = settings.katakana;
        const hasDiagraphs = settings.diagraphs;
        const hasDiacriticals = settings.diacriticals;
        const hasBothSyllabaries = hasHiragana && hasKatakana;
        const hasAnyExtra = hasDiagraphs || hasDiacriticals;

        if (settings.onlyDiagraphs) {
            return (
                <span>
                    <span className={className}>{"diagraphs"}</span>
                    <span>{" from the "}</span>
                    {hasHiragana && <span className={className}>{"hiragana"}</span>}
                    <span>{hasHiragana && hasKatakana ? " and " : ", "}</span>
                    {hasKatakana && <span className={className}>{"katakana"}</span>}
                    <span>{hasHiragana && hasKatakana ? " syllabaries " : "syllabary"}</span>
                </span>
            )
        }

        return (
            <span>
                {hasHiragana && <span className={className}>{"hiragana"}</span>}
                {hasBothSyllabaries && <span>{" and "}</span>}
                {hasKatakana && <span className={className}>{" katakana"}</span>}

                {hasAnyExtra && <span>{" with "}</span>}
                {hasDiagraphs && <span className={className}>{"diagraphs"}</span>}
                {hasDiagraphs && hasDiacriticals && <span>{" and "}</span>}
                {hasDiacriticals && <span className={className}>{"diacriticals "}</span>}
                {hasAnyExtra && <span>{"included "}</span>}
            </span>
        );
    } else if (isSentenceStructureSettings(settings)) {
        const words = [];
        if (settings.particles) words.push("particles");
        if (settings.adjectives) words.push("adjectives");
        if (settings.adverbs) words.push("adverbs");
        if (settings.nouns) words.push("nouns");
        if (settings.expressions) words.push("expressions");
        if (settings.verbs) words.push("verbs");
        return parseWords(words);
    } else if (isCalendarSettings(settings)) {
        const words = [];
        if (settings.phrases) words.push("phrases");
        if (settings.nouns) words.push("nouns");
        if (settings.days) words.push("days");
        if (settings.months) words.push("months");
        if (settings.seasons) words.push("seasons");
        return parseWords(words);
    } else if (isBasicsSettings(settings)) {
        const words = [];
        if (settings.weather) words.push("weather");
        if (settings.body) words.push("body");
        if (settings.directions) words.push("directions");
        if (settings.animals) words.push("animals");
        if (settings.colours) words.push("colours");
        if (settings.family) words.push("family");
        return parseWords(words);
    } else if (isKanjiSettings(settings)) {
        const hasGrades = settings.grades.length > 0;
        const hasTags = settings.tags.length > 0;
        return (
            <span>
                <span>{" kanji "}</span>
                {hasGrades && (
                    <>
                        <span>{"from grades "}</span>
                        <span className={className}>{settings.grades.join(", ")}</span>
                    </>
                )}

                {hasTags && hasGrades && <span>{" "}</span>}

                {hasTags && (
                    <>
                        <span>{"tagged with "}</span>
                        <span className={className}>{settings.tags.join(", ")}</span>
                    </>
                )}
            </span>
        );
    } else if (isNumbersSettings(settings)) {
        const words = [];
        if (settings.sequence) words.push("sequence");
        if (settings.age) words.push("age");
        if (settings.counters) words.push("counters");
        if (settings.units) words.push("units");
        if (settings.exceptions) words.push("exceptions");
        if (settings.numbers) words.push("numbers");
        return parseWords(words);
    }

    return null;
}

export default DataSettingsSummary;
