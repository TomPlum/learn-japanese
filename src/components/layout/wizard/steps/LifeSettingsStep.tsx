import React from "react"
import LifeSettingsForm from "../../../settings/game/LifeSettingsForm"
import LifeSettings from "../../../../domain/session/settings/game/LifeSettings"

export interface LifeSettingsStepProps {
    onSelect: (settings: LifeSettings) => void
}

const LifeSettingsStep = (props: LifeSettingsStepProps) => {
    const { onSelect } = props

    return (
        <div>
            <LifeSettingsForm onChange={onSelect} />
        </div>
    )
}

export default LifeSettingsStep
