import useClient from "api/useClient";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "api/queryKeys.ts";
import { useCallback } from "react";

import Topic from "types/Topic.ts";
import PresetBuilder from "types/session/PresetBuilder.ts";
import LearnSettings from "types/session/settings/LearnSettings.ts";
import DataSettingsConverter from "converter/DataSettingsConverter.ts";
import GameSettingsConverter from "converter/GameSettingsConverter.ts";
import PlayMode from "types/session/PlayMode.ts";
import LearnMode from "types/session/LearnMode.ts";
import { LearnPresetResponse, PlayPresetResponse, Presets, PresetsResponse } from "../types.ts";
import { UseGetPresetsProps } from "api/hooks/presets/useGetPresets/types.ts";

const dataSettingsConverter = new DataSettingsConverter()
const gameSettingsConverter = new GameSettingsConverter()

const useGetDefaultPresets = ({ enabled }: UseGetPresetsProps = { enabled: true }) => {
  const client = useClient()

  const convertLearnPreset = useCallback((data: LearnPresetResponse[]): LearnMode[] => {
    return data.map((preset: LearnPresetResponse) => {
      const topic = Topic.fromName(preset.topic)
      const dataSettings = dataSettingsConverter.convert(topic, preset.data)

      return new PresetBuilder()
        .withID(preset.id)
        .withDisplayName(preset.name)
        .withDescription(preset.description)
        .withColour(preset.colour)
        .withIcon(preset.icon)
        .withDataSettings(dataSettings)
        .withLearnSettings(new LearnSettings())
        .withTopicName(preset.topic)
        .build()
    })
  }, [])

  const convertPlayPreset = useCallback((data: PlayPresetResponse[]): PlayMode[] => {
    return data.map((preset: PlayPresetResponse) => {
      const topic = Topic.fromName(preset.topic)
      const dataSettings = dataSettingsConverter.convert(topic, preset.data)
      const gameSettings = gameSettingsConverter.convert(preset.game)

      return new PresetBuilder()
        .withID(preset.id)
        .withDisplayName(preset.name)
        .withDescription(preset.description)
        .withColour(preset.colour)
        .withIcon(preset.icon)
        .withDataSettings(dataSettings)
        .withGameSettings(gameSettings)
        .withTopicName(preset.topic)
        .build()
    })
  }, [])

  const getPresets = useCallback(async (): Promise<Presets> => {
    const { data  } = await client.get<PresetsResponse>("/presets/default")
    const learnPresets = convertLearnPreset(data.learn)
    const playPresets = convertPlayPreset(data.play)
    return {
      play: playPresets,
      learn: learnPresets
    }
  }, [client])

  return useQuery({
    queryKey: [queryKeys.getDefaultPresets],
    queryFn: getPresets,
    enabled
  })
}

export default useGetDefaultPresets