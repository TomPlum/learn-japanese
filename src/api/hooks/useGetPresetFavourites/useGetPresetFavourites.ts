import useClient from "api/useClient";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "api/queryKeys.ts";
import { useCallback } from "react";
import {
  FavouriteLearnPresetResponse,
  FavouritePlayPresetResponse
} from "./types.ts";
import Topic from "types/Topic.ts";
import PresetBuilder from "types/session/PresetBuilder.ts";
import LearnSettings from "types/session/settings/LearnSettings.ts";
import DataSettingsConverter from "converter/DataSettingsConverter.ts";
import GameSettingsConverter from "converter/GameSettingsConverter.ts";
import { FavouritePresetsResponse } from "api/hooks/useGetPresetFavourites/types.ts";
import PlayMode from "types/session/PlayMode.ts";
import LearnMode from "types/session/LearnMode.ts";
import SessionMode from "types/session/SessionMode.ts";

const dataSettingsConverter = new DataSettingsConverter()
const gameSettingsConverter = new GameSettingsConverter()

const useGetPresetFavourites = () => {
  const client = useClient()

  const convertFavouriteLearnPresets = useCallback((data: FavouriteLearnPresetResponse[]): LearnMode[] => {
    return data.map((favourite: FavouriteLearnPresetResponse) => {
      const preset = favourite.preset
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
        .withFavouriteID(favourite.id)
        .build()
    })
  }, [])

  const convertFavouritePlayPresets = useCallback((data: FavouritePlayPresetResponse[]): PlayMode[] => {
    return data.map((favourite: FavouritePlayPresetResponse) => {
      const preset = favourite.preset
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
        .withFavouriteID(favourite.id)
        .build()
    })
  }, [])

  const getPresetFavourites = useCallback(async (): Promise<SessionMode[]> => {
    const { data  } = await client.get<FavouritePresetsResponse>("/presets/favourites")
    const learnPresets = convertFavouriteLearnPresets(data.learn)
    const playPresets = convertFavouritePlayPresets(data.play)
    return [...learnPresets, ...playPresets]
  }, [client])

  return useQuery({
    queryKey: [queryKeys.getPresetFavourites],
    queryFn: getPresetFavourites
  })
}

export default useGetPresetFavourites