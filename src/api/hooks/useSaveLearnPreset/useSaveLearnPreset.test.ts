import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { SessionSettings } from "types/session/settings/SessionSettings.ts"
import { server } from "__test-utils__/msw.ts"
import { renderHook, waitFor } from "@testing-library/react"
import { wrapper } from "__test-utils__"
import { useSaveLearnPresetHandlers } from "api/hooks/useSaveLearnPreset/useSaveLearnPreset.handlers.ts"
import LearnSettings from "types/session/settings/LearnSettings.ts"
import useSaveLearnPreset from "api/hooks/useSaveLearnPreset/useSaveLearnPreset.ts";

describe("Save Custom Learn Preset API Hook", () => {
  it("Should return true if the API call succeeds", async () => {
    server.use(...useSaveLearnPresetHandlers)

    const { result } = renderHook(useSaveLearnPreset, { wrapper })

    await result.current.mutateAsync({
      settings: SessionSettings.forLearning(new KanaSettingsBuilder().build(), new LearnSettings()),
      meta: {
        name: "Test Mode",
        icon: faGraduationCap,
        colour: "#fdb40e"
      }
    })

    await waitFor(() => {
      expect(result.current.data?.success).toBe(true)
    })
  })
})