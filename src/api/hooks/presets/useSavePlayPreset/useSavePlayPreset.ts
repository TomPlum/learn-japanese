import useClient from "api/useClient"
import { useMutation } from "@tanstack/react-query"
import { useCallback } from "react"
import DataSettingsConverter from "converter/DataSettingsConverter.ts"
import GameSettingsConverter from "converter/GameSettingsConverter.ts"
import {
  CustomPresetDetails,
  PresetRequest
} from "../types.ts"
import UpdateResponse from "rest/response/UpdateResponse.ts"
import { mutationKeys } from "api/mutationKeys.ts"
import { PlayPresetRequest, SavePlayPresetMutationData } from "api/hooks/presets/useSavePlayPreset/types.ts";

const dataSettingsConverter = new DataSettingsConverter()
const gameSettingsConverter = new GameSettingsConverter()

const useSavePlayPreset = () => {
  const client = useClient()

  const buildRequest = useCallback((preset: CustomPresetDetails): PresetRequest => {
    const commonProperties = {
      name: preset.name,
      icon: preset.icon.toString(),
      colour: preset.colour.replace("#", ""),
      description: "Custom play preset",
      topic: preset.settings.dataSettings.topic.name,
      data: dataSettingsConverter.convertRequest(preset.settings.dataSettings)
    }

    if (preset.settings.gameSettings) {
      return {
        ...commonProperties,
        game: gameSettingsConverter.convertRequest(preset.settings.gameSettings)
      } as PlayPresetRequest
    } else {
      throw new Error("Cannot build custom play preset as there are no game settings defined")
    }
  }, [])

  const savePlayPreset = useCallback(async ({ meta, settings }: SavePlayPresetMutationData): Promise<UpdateResponse> => {
    const details: CustomPresetDetails = {
      name: meta.name,
      icon: meta.icon,
      colour: meta.colour,
      settings: settings
    }

    const request = buildRequest(details)

    await client.post("/presets/custom/play/save", request)
    
    return {
      success: true
    }
  }, [client])

  return useMutation({
    mutationKey: [mutationKeys.savePlayPreset],
    mutationFn: savePlayPreset
  })
}

export default useSavePlayPreset