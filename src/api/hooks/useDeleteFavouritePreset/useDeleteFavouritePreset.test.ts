import { renderHook, waitFor } from "@testing-library/react"
import { server } from "__test-utils__/msw.ts"
import { wrapper } from "__test-utils__"
import { useDeleteFavouritePresetHandlers } from "api/hooks/useDeleteFavouritePreset/useDeleteFavouritePreset.handlers.ts"
import useDeleteFavouritePreset from "api/hooks/useDeleteFavouritePreset/useDeleteFavouritePreset.ts"

describe("Delete Favourite Preset API Hook", () => {
  it("Should return success true when the deletion succeeds", async () => {
    server.use(...useDeleteFavouritePresetHandlers)

    const { result } = renderHook(useDeleteFavouritePreset, { wrapper })

    await result.current.mutateAsync({ id: "5" })

    await waitFor(() => {
      expect(result.current.data?.success).toBe(true)
    })
  })
})