import KanjiSettings from "../../../domain/session/settings/data/KanjiSettings"
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu"
import KanjiSettingsFormBody from "./KanjiSettingsFormBody"
import { useState } from "react"
import { v4 } from "uuid"

const KanjiSettingsForm = (props: DataSettingsMenuProps<KanjiSettings>) => {
    const { title, icon, onQuit, onReset, onConfirm } = props

    const [key, setKey] = useState(v4())
    const [settings, setSettings] = useState<KanjiSettings | undefined>(undefined)

    const handleReset = () => {
        setSettings(undefined)
        setKey(v4())
        onReset()
    }

    const validate = () => {
        return !!settings?.quantity || (settings?.grades?.length ?? 0) > 0
    }

    const confirm = () => {
        if (settings) {
            onConfirm(settings)
        }
    }

    return (
        <DataSettingsMenu
            title={title}
            icon={icon}
            onQuit={onQuit}
            onReset={handleReset}
            onConfirm={confirm}
            isValid={validate}
        >
            <KanjiSettingsFormBody key={key} onChange={setSettings} />
        </DataSettingsMenu>
    )
}

export default KanjiSettingsForm
