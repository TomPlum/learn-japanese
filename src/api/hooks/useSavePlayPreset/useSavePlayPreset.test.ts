import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { SessionSettings } from "types/session/settings/SessionSettings.ts"
import { server } from "__test-utils__/msw.ts";
import { useSavePlayPresetHandlers } from "api/hooks/useSavePlayPreset/useSavePlayPreset.handlers.ts";
import { renderHook, waitFor } from "@testing-library/react";
import useSavePlayPreset from "api/hooks/useSavePlayPreset/useSavePlayPreset.ts";
import { wrapper } from "__test-utils__";

describe("Save Custom Play Preset API Hook", () => {
  it("Should return true if the API call succeeds", async () => {
    server.use(...useSavePlayPresetHandlers)

    const { result } = renderHook(useSavePlayPreset, { wrapper })

    await result.current.mutateAsync({
      settings: SessionSettings.forGame(new KanaSettingsBuilder().build(), new GameSettingsBuilder().build()),
      meta: {
        name: "Test Mode",
        icon: faGraduationCap,
        colour: "#fdb40e",
      }
    })

    await waitFor(() => {
      expect(result.current.data?.success).toBe(true)
    })
  })
})