import TopicSelector from "../form/TopicSelector"
import React, { useEffect, useState } from "react"
import Topic from "../../../../domain/Topic"
import styles from "../../../../styles/sass/components/layout/wizard/steps/PresetSelectionStep.module.scss"
import GridItem from "../grid/GridItem"
import GridDisplay from "../grid/GridDisplay"
import ScrollableContainer from "../../../ui/ScrollableContainer"
import { AppMode } from "../../../../domain/AppMode"
import SessionMode from "../../../../domain/session/SessionMode"
import EditCustomPresetForm from "../form/EditCustomPresetForm"
import PresetService from "../../../../service/PresetService"
import PlayMode from "../../../../domain/session/PlayMode"
import LearnMode from "../../../../domain/session/LearnMode"
import { Alert } from "react-bootstrap"
import { useUserSelector } from "../../../../hooks"

export interface PresetSelectionStepProps {
    mode: AppMode
    topic: Topic
    preset?: SessionMode
    isValid: (valid: boolean) => void
    onSelect: (preset: SessionMode) => void
    onChangeTopic: (topic: Topic) => void
}

const PresetSelectionStep = (props: PresetSelectionStepProps) => {
    const { preset, mode, topic, onSelect, onChangeTopic, isValid } = props

    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | undefined>(undefined)
    const [playPresets, setPlayPresets] = useState<PlayMode[]>([])
    const [learnPresets, setLearnPresets] = useState<LearnMode[]>([])

    const service = new PresetService()
    const user = useUserSelector((state) => state.user.user)

    useEffect(() => {
        isValid(true)
        setLoading(true)
        setError(undefined)
        ;(user ? service.getAllPresets() : service.getDefaultPresets())
            .then((response) => {
                if (response.error) {
                    isValid(false)
                    setError(response.error)
                } else {
                    setPlayPresets(response.play)
                    setLearnPresets(response.learn)
                    if (!preset) {
                        const availablePresets = mode === AppMode.PLAY ? response.play : response.learn
                        const defaultPreset = availablePresets.filter((preset) => preset.topicName === topic.name)[0]
                        onSelect(defaultPreset)
                    }
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const onSelectPreset = (mode: SessionMode) => {
        onSelect(mode)
    }

    const onSelectTopic = (topic: Topic) => {
        const defaultPreset = (mode === AppMode.PLAY ? playPresets : learnPresets).filter(
            (preset) => preset.topicName === topic.name
        )[0]
        onSelect(defaultPreset)
        onChangeTopic(topic)
    }

    const TopicSelectionDropdown = () => (
        <TopicSelector topic={topic} onSelect={onSelectTopic} className={styles.topic} disabled={loading} />
    )

    const onEditCustomPreset = () => {
        setEditing(true)
    }

    const getTopicPresets = () => {
        const presets = mode === AppMode.PLAY ? playPresets : learnPresets
        return presets.filter((preset) => preset.topicName === topic.name)
    }

    return (
        <div className={styles.container}>
            <ScrollableContainer height={344}>
                {editing && <EditCustomPresetForm preset={preset!} onClose={() => setEditing(false)} />}

                {error && <Alert variant="danger">{error}</Alert>}

                {!editing && !error && (
                    <GridDisplay loading={loading} controls customOptions={<TopicSelectionDropdown />}>
                        {getTopicPresets().map((option: SessionMode) => (
                            <GridItem
                                value={option}
                                icon={option.icon}
                                onClick={onSelectPreset}
                                editable={option.custom}
                                desc={option.description}
                                id={option.id.toString()}
                                className={styles.preset}
                                iconColour={option.colour}
                                onEdit={onEditCustomPreset}
                                selected={preset?.displayName ?? ""}
                                key={option.displayName + "-button"}
                            />
                        ))}
                    </GridDisplay>
                )}

                {!loading && !error && getTopicPresets().length === 0 && <p>No presets available for this topic.</p>}
            </ScrollableContainer>
        </div>
    )
}

export default PresetSelectionStep
