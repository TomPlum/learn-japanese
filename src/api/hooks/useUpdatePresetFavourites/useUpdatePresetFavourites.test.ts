import { renderHook, waitFor } from "@testing-library/react"
import { server } from "__test-utils__/msw.ts"
import { wrapper } from "__test-utils__"
import useUpdatePresetFavourites from "api/hooks/useUpdatePresetFavourites/useUpdatePresetFavourites.ts"
import { useUpdatePresetFavouritesHandlers } from "api/hooks/useUpdatePresetFavourites/useUpdatePresetFavourites.handlers.ts"

describe("Update Preset Favourites Preset API Hook", () => {
  it("Should return success true when the update succeeds", async () => {
    server.use(...useUpdatePresetFavouritesHandlers)

    const { result } = renderHook(useUpdatePresetFavourites, { wrapper })

    await result.current.mutateAsync({
      add: [1, 2],
      remove: [3]
    })

    await waitFor(() => {
      expect(result.current.data?.success).toBe(true)
    })
  })
})