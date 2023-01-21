import { useState } from "react"
import KanaSettings, { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings"
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu"
import KanaSettingsFormBody from "./KanaSettingsFormBody"

const KanaSettingsForm = (props: DataSettingsMenuProps<KanaSettings>) => {
    const { title, icon, onQuit, onReset, onConfirm } = props

    const defaultState = new KanaSettingsBuilder().withHiragana().build()
    const [settings, setSettings] = useState<KanaSettings>(defaultState)
    const [valid, setValid] = useState(true)

    const reset = () => {
        setSettings(defaultState)
        onReset()
    }

    const confirm = () => {
        onConfirm(settings)
    }

    return (
        <DataSettingsMenu
            title={title}
            icon={icon}
            onQuit={onQuit}
            onReset={reset}
            onConfirm={confirm}
            isValid={() => valid}
        >
            <KanaSettingsFormBody onChange={setSettings} isValid={setValid} />
        </DataSettingsMenu>
    )
}

export default KanaSettingsForm
