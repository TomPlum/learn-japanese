import { useState } from "react"
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu"
import SentenceStructureSettings, {
    SentenceStructureSettingsBuilder
} from "../../../domain/session/settings/data/SentenceStructureSettings"
import SentenceStructureFormBody from "./SentenceStructureFormBody"

const SentenceStructureForm = (props: DataSettingsMenuProps<SentenceStructureSettings>) => {
    const { title, icon, onQuit, onConfirm, onReset } = props

    const defaultSettings = new SentenceStructureSettingsBuilder()
        .withAdverbs()
        .withParticles()
        .withExpressions()
        .withVerbs()
        .withNouns()
        .withAdjectives()
        .withQuantity(25)
        .build()

    const [settings, setSettings] = useState(defaultSettings)
    const [valid, setValid] = useState(true)

    const reset = () => {
        setSettings(defaultSettings)
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
            <SentenceStructureFormBody onChange={setSettings} isValid={(valid) => setValid(valid)} />
        </DataSettingsMenu>
    )
}

export default SentenceStructureForm
