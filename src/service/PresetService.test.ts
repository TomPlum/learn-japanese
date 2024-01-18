import PresetService from "./PresetService.ts"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import LearnSettings from "types/session/settings/LearnSettings.ts"
import { GameSettingsBuilder } from "types/session/settings/game/GameSettings.ts"
import { SessionSettings } from "types/session/settings/SessionSettings.ts"

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

  describe("Save Custom Preset", () => {
    describe("Play", () => {
      const settings = SessionSettings.forGame(new KanaSettingsBuilder().build(), new GameSettingsBuilder().build())

      it("Should call the repository with the details", () => {
        mockSavePlayPreset.mockResolvedValueOnce({})
        service.saveCustomPreset({ name: "Test Play", icon: "FaAtom", colour: "#FFFFFF" }, settings).then(() => {
          expect(mockSavePlayPreset).toHaveBeenLastCalledWith({
            name: "Test Play",
            icon: "FaAtom",
            colour: "#FFFFFF",
            settings: settings
          })
        })
      })

      it("Should return true if the repository promise resolves successfully", () => {
        mockSavePlayPreset.mockResolvedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Play", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.success).toBe(true)
          })
      })

      it("Should return an undefined error if the repository promise resolves successfully", () => {
        mockSavePlayPreset.mockResolvedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Play", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.error).toBeUndefined()
          })
      })

      it("Should return false if the repository promise is rejected", () => {
        mockSavePlayPreset.mockRejectedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Play", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.success).toBe(false)
          })
      })

      it("Should return an undefined error if the repository promise resolves successfully", () => {
        mockSavePlayPreset.mockRejectedValueOnce({ error: "Failed to save custom preset" })
        service
          .saveCustomPreset({ name: "Test Play", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.error).toBe("Failed to save custom preset")
          })
      })
    })

    describe("Learn", () => {
      const settings = SessionSettings.forLearning(new KanaSettingsBuilder().build(), new LearnSettings())

      it("Should call the repository with the details", () => {
        mockSaveLearnPreset.mockResolvedValueOnce({})
        service.saveCustomPreset({ name: "Test Learn", icon: "FaAtom", colour: "#FFFFFF" }, settings).then(() => {
          expect(mockSaveLearnPreset).toHaveBeenLastCalledWith({
            name: "Test Learn",
            icon: "FaAtom",
            colour: "#FFFFFF",
            settings: settings
          })
        })
      })

      it("Should return true if the repository promise resolves successfully", () => {
        mockSaveLearnPreset.mockResolvedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Learn", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.success).toBe(true)
          })
      })

      it("Should return an undefined error if the repository promise resolves successfully", () => {
        mockSaveLearnPreset.mockResolvedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Learn", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.error).toBeUndefined()
          })
      })

      it("Should return false if the repository promise is rejected", () => {
        mockSaveLearnPreset.mockRejectedValueOnce({})
        service
          .saveCustomPreset({ name: "Test Learn", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.success).toBe(false)
          })
      })

      it("Should return an undefined error if the repository promise resolves successfully", () => {
        mockSaveLearnPreset.mockRejectedValueOnce({ error: "Failed to save custom preset" })
        service
          .saveCustomPreset({ name: "Test Learn", icon: "FaAtom", colour: "#FFFFFF" }, settings)
          .then((response) => {
            expect(response.error).toBe("Failed to save custom preset")
          })
      })
    })
  })
})
