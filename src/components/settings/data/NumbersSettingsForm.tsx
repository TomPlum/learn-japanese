import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu"
import NumbersSettings, { NumbersSettingsBuilder } from "../../../domain/session/settings/data/NumbersSettings"
import { useState } from "react"
import NumbersSettingsFormBody from "./NumbersSettingsFormBody"

const NumbersSettingsForm = (props: DataSettingsMenuProps<NumbersSettings>) => {
    const { title, icon, onQuit, onReset, onConfirm } = props

    const defaultSettings = new NumbersSettingsBuilder()
        .withQuantity(25)
        .withExceptions()
        .withSequence()
        .withCounters()
        .withNumbers()
        .withUnits()
        .withAge()
        .build()

    const [settings, setSettings] = useState(defaultSettings)
    const [valid, setValid] = useState(true)

    const handleReset = () => {
        setSettings(defaultSettings)
        onReset()
    }

    const handleConfirm = () => {
        onConfirm(settings)
    }

    return (
        <DataSettingsMenu
            title={title}
            icon={icon}
            onQuit={onQuit}
            onReset={handleReset}
            onConfirm={handleConfirm}
            isValid={() => valid}
        >
            <NumbersSettingsFormBody onChange={setSettings} isValid={setValid} />
        </DataSettingsMenu>
    )
}

export default NumbersSettingsForm
