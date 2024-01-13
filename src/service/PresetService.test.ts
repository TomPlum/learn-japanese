import PresetService, { LearnPlayPresets } from "./PresetService.ts"
import { KanaSettingsBuilder } from "../domain/session/settings/data/KanaSettings.ts"
import LearnSettings from "../domain/session/settings/LearnSettings.ts"
import { GameSettingsBuilder } from "../domain/session/settings/game/GameSettings.ts"
import { SessionSettings } from "../domain/session/settings/SessionSettings.ts"
import PresetBuilder from "../domain/session/PresetBuilder.ts"
import { KanjiSettingsBuilder } from "../domain/session/settings/data/KanjiSettings.ts"
import PlayMode from "../domain/session/PlayMode.ts"

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

const playPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Test Play")
  .withColour("#ffffff")
  .withIcon("FaAtom")
  .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
  .withGameSettings(new GameSettingsBuilder().build())
  .withTopicName("Topic")
  .build()

const learnPreset = new PresetBuilder()
  .withID(2)
  .withDisplayName("Test Learn")
  .withColour("#fdb40e")
  .withIcon("あ")
  .withDataSettings(new KanjiSettingsBuilder().withQuantity(25).withJoyoKanji().build())
  .withLearnSettings(new LearnSettings())
  .withTopicName("Topic")
  .build()

describe("Preset Service", () => {
  const service = new PresetService()

  describe("Get All Presets", () => {
    it("Should return the presets from the repository when the call succeeds", () => {
      mockGetAllPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
      return service.getAllPresets().then((response: LearnPlayPresets) => {
        expect(response).toStrictEqual({ learn: [learnPreset], play: [playPreset], error: undefined })
      })
    })

    it("Should return empty preset array if the repository call fails with an error message", () => {
      mockGetAllPresets.mockRejectedValueOnce({ error: "Failed to retrieve presets." })
      return service.getAllPresets().then((response: LearnPlayPresets) => {
        expect(response).toStrictEqual({ learn: [], play: [], error: "Failed to retrieve presets." })
      })
    })
  })

  describe("Get Default Presets", () => {
    it("Should return the default presets from the repository when the call succeeds", () => {
      mockGetDefaultPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
      return service.getDefaultPresets().then((response: LearnPlayPresets) => {
        expect(response).toStrictEqual({ learn: [learnPreset], play: [playPreset], error: undefined })
      })
    })

    it("Should return empty preset array if the repository call fails with an error message", () => {
      mockGetDefaultPresets.mockRejectedValueOnce({ error: "Failed to retrieve default presets." })
      return service.getDefaultPresets().then((response: LearnPlayPresets) => {
        expect(response).toStrictEqual({ learn: [], play: [], error: "Failed to retrieve default presets." })
      })
    })
  })

  describe("Get Play Presets", () => {
    it("Should return only the play presets", () => {
      mockGetDefaultPresets.mockResolvedValueOnce({ learn: [learnPreset], play: [playPreset] })
      return service.getPlayPresets().then((response: PlayMode[]) => {
        expect(response).toStrictEqual([playPreset])
      })
    })
  })

  describe("Remove Favourite Preset", () => {
    it("Should call the delete preset favourite repository function", () => {
      mockDeleteFavouritePreset.mockResolvedValueOnce({ success: true })
      return service.removeFavouritePreset(playPreset).then(() => {
        expect(mockDeleteFavouritePreset).toHaveBeenLastCalledWith(2)
      })
    })

    it("Should return the success status from the repository", () => {
      mockDeleteFavouritePreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." })
      return service.removeFavouritePreset(playPreset).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message from the repository", () => {
      mockDeleteFavouritePreset.mockResolvedValueOnce({ success: false, error: "Failed to delete." })
      return service.removeFavouritePreset(playPreset).then((response) => {
        expect(response.error).toBe("Failed to delete.")
      })
    })
  })

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
