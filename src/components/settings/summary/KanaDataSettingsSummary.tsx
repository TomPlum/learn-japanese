import KanaSettings from "../../../domain/session/settings/data/KanaSettings";

export interface KanaDataSettingsSummaryProps {
    settings: KanaSettings;
    className?: string;
}

const KanaDataSettingsSummary = (props: KanaDataSettingsSummaryProps) => {

    const { settings, className } = props;

    const hasHiragana = settings.hiragana;
    const hasKatakana = settings.katakana;
    const hasDiagraphs = settings.diagraphs;
    const hasDiacriticals = settings.diacriticals;
    const hasBothSyllabaries = hasHiragana && hasKatakana;
    const hasAnyExtra = hasDiagraphs || hasDiacriticals;

    if (settings.onlyDiagraphs) {
        return (
            <>
                <span className={className}>{"diagraphs"}</span>
                <span>{" from the "}</span>
                {hasHiragana && <span className={className}>{"hiragana"}</span>}
                {hasHiragana && hasKatakana && <span>{" and "}</span>}
                {hasKatakana && <span className={className}>{"katakana"}</span>}
                <span>{hasHiragana && hasKatakana ? " syllabaries " : " syllabary"}</span>
            </>
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
            {hasDiacriticals && <span className={className}>{"diacriticals"}</span>}
            {hasAnyExtra && <span>{" included "}</span>}
        </span>
    );
}

export default KanaDataSettingsSummary;
