import RestClient from "../rest/RestClient"
import GenkiDefinition from "../domain/learn/GenkiDefinition"

interface GenkiResponseData {
  lesson: number
  meaning: string
  kana: string
  kanji?: string
}

interface GenkiDefinitions {
  definitions?: GenkiDefinition[]
  error?: string
}

class GenkiService {
  /**
   * Retrieves all of the vocabulary from all lesson in Genki I and II.
   * @return data All vocabulary data.
   */
  public async getAllVocab(): Promise<GenkiDefinitions> {
    return RestClient.get<GenkiResponseData[]>("/genki/all")
      .then((response) => {
        if (response.data) {
          const definitions = response.data.map((it) => new GenkiDefinition(it.lesson, it.meaning, it.kana, it.kanji))
          return { definitions: definitions }
        } else {
          return { error: "No definitions were returned." }
        }
      })
      .catch((response) => {
        if (response.error) {
          return { error: response.error }
        } else {
          return { error: "An unknown error occurred." }
        }
      })
  }
}

export default GenkiService
