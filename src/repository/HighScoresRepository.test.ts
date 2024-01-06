import HighScoresRepository, { FindAllHighScoreEntries } from "./HighScoresRepository.ts"
import RestClient from "../rest/RestClient.ts"

const mockGet = vi.fn()
const mockPost = vi.fn()

describe("High-Scores Repository", () => {
  const repository = new HighScoresRepository()

  beforeEach(() => {
    RestClient.get = mockGet
    RestClient.post = mockPost
  })

  describe("Find All Entries Page", () => {
    it("Should call the rest client with the correct endpoint and query parameters", () => {
      mockGet.mockResolvedValueOnce({})
      return repository.findAll({ id: 12, page: 1, size: 10 }).then(() => {
        expect(mockGet).toHaveBeenLastCalledWith("/high-scores/entries/12?page=1&size=10")
      })
    })

    it("Should call the rest client with the correct endpoint and query parameters with the user passed", () => {
      mockGet.mockResolvedValueOnce({})
      return repository.findAll({ id: 12, page: 1, size: 10, username: "TomPlum" }).then(() => {
        expect(mockGet).toHaveBeenLastCalledWith("/high-scores/entries/12?page=1&size=10&user=TomPlum")
      })
    })

    it("Should return the page response if there is truthy data", () => {
      mockGet.mockResolvedValueOnce({
        data: {
          pages: 5,
          total: 120,
          value: [
            {
              user: { id: 1, name: "Tom" },
              presetId: 1,
              score: 9235,
              time: "04:50"
            }
          ]
        }
      })

      return repository.findAll({ id: 12, page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
        expect(response).toStrictEqual({
          entries: [
            {
              user: { id: 1, name: "Tom" },
              presetId: 1,
              score: 9235,
              time: "04:50"
            }
          ],
          total: 120,
          pages: 5
        })
      })
    })

    it("Should return an error if the promise resolves with falsy data", () => {
      mockGet.mockResolvedValueOnce({ data: undefined, error: "Something went wrong." })
      return repository.findAll({ id: 12, page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
        expect(response).toStrictEqual({
          entries: [],
          total: 0,
          pages: 0,
          error: "Something went wrong."
        })
      })
    })

    it("Should return an error if the promise is rejected", () => {
      mockGet.mockResolvedValueOnce({ error: "Something went wrong." })
      return repository.findAll({ id: 12, page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
        expect(response).toStrictEqual({
          entries: [],
          total: 0,
          pages: 0,
          error: "Something went wrong."
        })
      })
    })
  })

  describe("Save Entry", () => {
    it("Should call the rest client with the correct endpoint and request payload", () => {
      mockPost.mockResolvedValueOnce({})
      return repository.save({ preset: 37, score: 5832, time: "04:54" }).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/high-scores/entry", {
          preset: 37,
          score: 5832,
          time: "04:54"
        })
      })
    })

    it("Should return success as false when the promise resolves and returns an error", () => {
      mockPost.mockResolvedValueOnce({ error: "Failed to save high-score entry" })
      return repository.save({ preset: 37, score: 5832, time: "04:54" }).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message when the promise resolves and returns an error", () => {
      mockPost.mockResolvedValueOnce({ error: "Failed to save high-score entry" })
      return repository.save({ preset: 37, score: 5832, time: "04:54" }).then((response) => {
        expect(response.error).toBe("Failed to save high-score entry")
      })
    })

    it("Should return success as false when the promise is rejected", () => {
      mockPost.mockRejectedValueOnce({ error: "Failed to save high-score entry" })
      return repository.save({ preset: 37, score: 5832, time: "04:54" }).then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return the error message when the promise is rejected and returns an error", () => {
      mockPost.mockRejectedValueOnce({ error: "Failed to save high-score entry" })
      return repository.save({ preset: 37, score: 5832, time: "04:54" }).then((response) => {
        expect(response.error).toBe("Failed to save high-score entry")
      })
    })
  })
})
