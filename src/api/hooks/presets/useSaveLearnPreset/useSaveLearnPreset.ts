import useClient from "api/useClient"
import { useMutation } from "@tanstack/react-query"
import { useCallback } from "react"
import DataSettingsConverter from "converter/DataSettingsConverter.ts"
import { CustomPresetDetails, PresetRequest } from "repository/PresetRepository.ts"
import UpdateResponse from "rest/response/UpdateResponse.ts"
import { mutationKeys } from "api/mutationKeys.ts"
import { SaveLearnPresetMutationData } from "api/hooks/presets/useSaveLearnPreset/types.ts"

const dataSettingsConverter = new DataSettingsConverter()

const useSaveLearnPreset = () => {
  const client = useClient()

  const buildRequest = useCallback((preset: CustomPresetDetails): PresetRequest => ({
    name: preset.name,
    icon: preset.icon.toString(),
    colour: preset.colour.replace("#", ""),
    description: "Custom learn preset",
    topic: preset.settings.dataSettings.topic.name,
    data: dataSettingsConverter.convertRequest(preset.settings.dataSettings)
  }), [])

  const saveLearnPreset = useCallback(async ({ meta, settings }: SaveLearnPresetMutationData): Promise<UpdateResponse> => {
    const details: CustomPresetDetails = { name: meta.name, icon: meta.icon, colour: meta.colour, settings: settings }
    const request = buildRequest(details)
    await client.post("/presets/custom/learn/save", request)
    
    return {
      success: true
    }
  }, [client])

  return useMutation({
    mutationKey: [mutationKeys.saveLearnPreset],
    mutationFn: saveLearnPreset
  })
}

export default useSaveLearnPreset