import TopicSelector from "../../form/TopicSelector"
import { useEffect, useState } from "react"
import Topic from "types/Topic"
import styles  from "./PresetSelectionStep.module.scss"
import GridItem from "../../grid/GridItem"
import GridDisplay from "../../grid/GridDisplay"
import ScrollableContainer from "../../../../ui/ScrollableContainer"
import { AppMode } from "types/AppMode"
import SessionMode from "types/session/SessionMode"
import EditCustomPresetForm from "../../form/EditCustomPresetForm"
import PlayMode from "types/session/PlayMode"
import LearnMode from "types/session/LearnMode"
import { Alert } from "react-bootstrap"
import { useUserContext } from "context/UserContext";
import useGetPresets from "api/hooks/presets/useGetPresets";
import useGetDefaultPresets from "api/hooks/presets/useGetDefaultPresets";

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
  const [playPresets, setPlayPresets] = useState<PlayMode[]>([])
  const [learnPresets, setLearnPresets] = useState<LearnMode[]>([])

  const { user } = useUserContext()

  const {
    data: allPresets,
    isError: isAllPresetsError,
    isLoading: allPresetsLoading,
  } = useGetPresets({ enabled: Boolean(user) })

  const {
    data: defaultPresets,
    isError: isDefaultPresetsError,
    isLoading: defaultPresetsLoading,
  } = useGetDefaultPresets({ enabled: !Boolean(user) })

  const loading = allPresetsLoading || defaultPresetsLoading
  const error = isAllPresetsError || isDefaultPresetsError

  useEffect(() => {
    const presets = Boolean(user) ? allPresets : defaultPresets

    if (presets) {
      setPlayPresets(presets.play)
      setLearnPresets(presets.learn)

      if (!preset) {
        const availablePresets = mode === AppMode.PLAY ? presets.play : presets.learn
        const defaultPreset = availablePresets.filter((preset) => preset.topicName === topic.name)[0]
        onSelect(defaultPreset)
      }
    }
  }, [user, allPresets, defaultPresets, mode, onSelect])

  useEffect(() => {
    isValid(!error)
  }, [error, isValid]);

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
    <TopicSelector
      topic={topic}
      onSelect={onSelectTopic}
      className={styles.topic}
      disabled={loading}
    />
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
        {editing && (
          <EditCustomPresetForm
            preset={preset!}
            onClose={() => setEditing(false)}
          />
        )}

        {error && (
          <Alert variant="danger">
            Failed to retrieve presets.
          </Alert>
        )}

        {!editing && !error && (
          <GridDisplay loading={loading} controls customOptions={<TopicSelectionDropdown />} id='presets'>
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

        {!loading && !error && getTopicPresets().length === 0 && (
          <p>No presets available for this topic.</p>
        )}
      </ScrollableContainer>
    </div>
  )
}

export default PresetSelectionStep
