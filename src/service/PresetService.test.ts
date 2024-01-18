import PresetService from "./PresetService.ts"

const mockGetAllPresets = vi.fn()
const mockGetDefaultPresets = vi.fn()
const mockFavouritePresets = vi.fn()
const mockDeleteFavouritePreset = vi.fn()
const mockUpdateFavouritePresets = vi.fn()
const mockSavePlayPreset = vi.fn()
const mockSaveLearnPreset = vi.fn()
vi.mock("repository/PresetRepository", () => ({
  default: function () {
    return {
      getAllPresets: mockGetAllPresets,
      getDefaultPresets: mockGetDefaultPresets,
      savePlayPreset: mockSavePlayPreset,
      saveLearnPreset: mockSaveLearnPreset,
      getFavouritePresets: mockFavouritePresets,
      deleteFavouritePreset: mockDeleteFavouritePreset,
      updateFavouritePresets: mockUpdateFavouritePresets
    }
  }
}))

describe("Preset Service", () => {
  const service = new PresetService()

  describe("Update Favourite presets", () => {
    it("Should call the update repository function with the given add and remove IDs", () => {
      mockUpdateFavouritePresets.mockResolvedValueOnce({})
      return service.updateFavourites([1, 4, 6], [9]).then(() => {
        expect(mockUpdateFavouritePresets).toHaveBeenCalledWith([1, 4, 6], [9])
      })
    })

    it("Should return a truthy success status if the repository call succeeds", () => {
      mockUpdateFavouritePresets.mockResolvedValueOnce({})
      return service.updateFavourites([1, 4, 6], [9]).then((response) => {
        expect(response.success).toBe(true)
      })
    })

    it("Should return an undefined error if the repository call succeeds", () => {
      mockUpdateFavouritePresets.mockResolvedValueOnce({})
      return service.updateFavourites([1, 4, 6], [9]).then((response) => {
        expect(response.error).toBeUndefined()
      })
    })

    it("Should return a falsy success status if the repository call fails", () => {
      mockUpdateFavouritePresets.mockRejectedValueOnce({})
      return service.updateFavourites([1, 4, 6], [9]).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return a the error if the repository call fails", () => {
      mockUpdateFavouritePresets.mockRejectedValueOnce({ error: "Failed to update favourites." })
      return service.updateFavourites([1, 4, 6], [9]).then((response) => {
        expect(response.error).toBe("Failed to update favourites.")
      })
    })
  })
})
