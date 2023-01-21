import Repository from "./Repository"
import KanjiSettings from "../domain/session/settings/data/KanjiSettings"
import { Kanji } from "../domain/kanji/Kanji"
import RestClient from "../rest/RestClient"
import KanjiConverter from "../converter/KanjiConverter"
import { PaginationRequest } from "../rest/request/PaginationRequest"
import { Learnable } from "../domain/learn/Learnable"

export interface KanjiResponseModel {
  character: string
  grade?: number
  strokes?: number
  jlpt?: number
  source?: string
  meanings: string[]
  readings: ReadingResponseModel[]
  examples: ExampleResponseModel[]
  tags: string[]
}

export interface PagedKanjiResponseModel {
  results: KanjiResponseModel[]
  pages: number
  total: number
}

export interface ReadingResponseModel {
  value: string
  type: "kun" | "on"
}

export interface ExampleResponseModel {
  value: string
  kana: string[]
  english: string[]
}

interface KanjiByGradeRequest {
  grades: number[]
  quantity?: number
  paging: PaginationRequest
}

interface KanjiSearchResponseModel {
  results: { field: string; value: KanjiResponseModel }[]
  pages: number
  total: number
}

interface KanjiSearchResults {
  results: { field: string; value: Kanji }[]
  pages: number
  quantity: number
  error?: string
}

interface KanjiByFilterRequest {
  search?: string
  grades?: number[]
  levels?: number[]
  strokes?: number
  paging: PaginationRequest
}

export interface Paged<T extends Learnable> {
  results: T[]
  pages: number
  quantity: number
}

export default class KanjiRepository implements Repository<Kanji> {
  private readonly converter = new KanjiConverter()

  /**
   * Retrieves kanji based on the given settings.
   * @param settings Rules governing which kanji to return.
   * @param pagination Pagination information.
   * @return kanji An array of matched kanji. Empty if none matched.
   */
  public async read(
    settings: KanjiSettings,
    pagination: PaginationRequest = { page: 0, size: 9999 }
  ): Promise<Paged<Kanji>> {
    const request: KanjiByGradeRequest = {
      grades: settings.grades.map((grade) => grade.value),
      quantity: settings.quantity,
      paging: pagination
    }

    return RestClient.post<PagedKanjiResponseModel>("/kanji/by-grade", request)
      .then((response) => {
        const data = response.data
        if (data) {
          const kanji = this.converter.convert(data.results)
          return { results: kanji, pages: data.pages, quantity: data.total }
        }
        return Promise.resolve({ results: [], pages: 0, quantity: 0 })
      })
      .catch((response) => {
        return Promise.reject(response)
      })
  }

  /**
   * Retrieves all the kanji that match the given search term.
   * @param page The page to retrieve. Starts from 0.
   * @param pageSize The size of the page.
   * @param search The term to search by.
   * @return results A collection of matching kanji and the field that it was matched on.
   */
  public async getBySearchTerm(page: number, pageSize: number, search: string): Promise<KanjiSearchResults> {
    const request: PaginationRequest = { page: page, size: pageSize }
    return RestClient.post<KanjiSearchResponseModel>("/kanji/by-term/" + search, request)
      .then((response) => {
        const data = response.data

        if (data) {
          return this.convertKanjiResponseModel(data)
        }

        return Promise.resolve({
          results: [],
          pages: 0,
          quantity: 0,
          error: "No data in response"
        })
      })
      .catch((response) => {
        return Promise.reject({ results: [], pages: 0, quantity: 0, error: response.error })
      })
  }

  /**
   * Retrieves all the kanji that match any of the given criteria.
   * @param page The page to retrieve. Starts from 0.
   * @param pageSize The size of the page.
   * @param search The term to search by.
   * @param grades The Kyouiku grades to filter by.
   * @param levels The JLPT levels to filter by.
   * @param strokes The number of strokes to filter by.
   * @return results A collection of matching kanji and the field that it was matched on.
   */
  public async getByFilter(
    page: number,
    pageSize: number,
    search: string,
    grades: number[],
    levels: number[],
    strokes?: number
  ): Promise<KanjiSearchResults> {
    const request: KanjiByFilterRequest = {
      search: search,
      grades: grades,
      levels: levels,
      strokes: strokes,
      paging: {
        page: page,
        size: pageSize
      }
    }

    return RestClient.post<KanjiSearchResponseModel>("/kanji/by-filter", request)
      .then((response) => {
        const data = response.data

        if (data) {
          return this.convertKanjiResponseModel(data)
        }

        return Promise.resolve({
          results: [],
          pages: 0,
          quantity: 0,
          error: "No data in response"
        })
      })
      .catch((response) => {
        return Promise.reject({ results: [], pages: 0, quantity: 0, error: response.error })
      })
  }

  /**
   * Gets a single kanji by the given character.
   * @param value The kanji character to retrieve.
   * @return kanji The associated information for the request kanji or undefined if it doesn't exist.
   */
  public async getByValue(value: string): Promise<Kanji | undefined> {
    return RestClient.get<KanjiResponseModel>(`/kanji/by-character/${value}`)
      .then((response) => {
        return response.data ? this.converter.convert([response.data])[0] : undefined
      })
      .catch((response) => {
        return Promise.reject(response)
      })
  }

  /**
   * Retrieves a single random kanji character.
   * @return A random kanji.
   */
  public async getRandomKanji(): Promise<Kanji | undefined> {
    return RestClient.get<KanjiResponseModel>("/kanji/random")
      .then((response) => {
        return response.data ? this.converter.convert([response.data])[0] : undefined
      })
      .catch(() => {
        return undefined
      })
  }

  private convertKanjiResponseModel(response: KanjiSearchResponseModel) {
    return {
      results: response.results.map((result) => {
        return {
          field: result.field,
          value: this.converter.convert([result.value])[0]
        }
      }),
      pages: response.pages,
      quantity: response.total
    }
  }
}
