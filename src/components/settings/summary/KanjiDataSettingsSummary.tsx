import KanjiSettings from "../../../domain/session/settings/data/KanjiSettings"

export interface KanjiDataSettingsSummaryProps {
    settings: KanjiSettings
    className?: string
}

const KanjiDataSettingsSummary = (props: KanjiDataSettingsSummaryProps) => {
    const { settings, className } = props

    const hasGrades = settings.grades.length > 0
    const hasTags = settings.tags.length > 0
    return (
        <span>
            <span>{" kanji "}</span>

            {hasGrades && (
                <>
                    <span>{"from grades "}</span>
                    <span className={className}>{settings.grades.map((it) => it.value).join(", ")}</span>
                </>
            )}

            {hasTags && hasGrades && <span> </span>}

            {hasTags && (
                <>
                    <span>{"tagged with "}</span>
                    <span className={className}>{settings.tags.join(", ")}</span>
                </>
            )}
        </span>
    )
}

export default KanjiDataSettingsSummary
