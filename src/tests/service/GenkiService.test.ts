import RestClient from "../../rest/RestClient"
import GenkiService from "../../service/GenkiService"
import GenkiDefinition from "../../domain/learn/GenkiDefinition"

const mockGet = jest.fn()

beforeEach(() => {
    RestClient.get = mockGet
})

describe("Genki Service", () => {
    const service = new GenkiService()

    it("Should call the RestClient with the correct endpoint", () => {
        mockGet.mockResolvedValue({ data: [] })
        service.getAllVocab()
        expect(mockGet).toHaveBeenCalledWith("/genki/all")
    })

    it("Should return the definitions if the API call returns data", () => {
        mockGet.mockResolvedValue({ data: [{ lesson: 9, meaning: "blue", kana: "あおい", kanji: "青い" }] })
        return service.getAllVocab().then((response) => {
            expect(response.definitions!).toStrictEqual([new GenkiDefinition(9, "blue", "あおい", "青い")])
        })
    })

    it("Should return an error message if the API call succeeds but there is no definition data", () => {
        mockGet.mockResolvedValue({ data: undefined })
        return service.getAllVocab().then((response) => {
            expect(response.error).toBe("No definitions were returned.")
        })
    })

    it("Should return the specified error if the API call fails and it returns one", () => {
        mockGet.mockRejectedValue({ error: "Internal Server Error" })
        return service.getAllVocab().then((response) => {
            expect(response.error).toBe("Internal Server Error")
        })
    })

    it("Should return a default error if the API call fails and doesn't returns one", () => {
        mockGet.mockRejectedValue({})
        return service.getAllVocab().then((response) => {
            expect(response.error).toBe("An unknown error occurred.")
        })
    })
})
