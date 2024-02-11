import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiByFilterResponses } from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.responses.ts";
import { KanjiByFilterRequest, KanjiSearchResponseModel } from "api/hooks/kanji/useGetKanjiByFilter/types.ts";

export interface GetKanjiByFilterMswArgs {
  response: KanjiSearchResponseModel
  search?: string
  grades?: number[]
  levels?: number[]
  strokes?: number
}

export const useGetKanjiByFilterHandlers: RequestHandler[] = [
  http.post('*/kanji/by-filter', () => {
    return HttpResponse.json(useGetKanjiByFilterResponses)
  })
]

export const useGetKanjiByFilterErrorHandlers: RequestHandler[] = [
  http.post('*/kanji/by-filter', () => {
    return HttpResponse.error()
  })
]

const logMismatchStubError = <T,>(field: string, actual: T, expected: T) => {
  console.error(
    `useGetKanjiByFilter API hook was called with the '${field}' field set in the request body as ` +
    `[${actual}] but did not match the stubbed value of [${expected}]`
  )
}

export const useGetCustomKanjiByFilterHandlers = ({
   response, search, grades, levels, strokes
}: GetKanjiByFilterMswArgs): RequestHandler[] => {
  return [
    http.post("*/kanji/by-filter", async ({ request }) => {
      const body = await request.json() as KanjiByFilterRequest

      if (body.search) {
        if (body.search === search) {
          return HttpResponse.json(response)
        } else {
          logMismatchStubError('search', body.search, search)
          return HttpResponse.error()
        }
      }

      const gradesRequest = body.grades && body.grades.length > 0 ? body.grades : []
      if (gradesRequest.length > 0) {
        if (gradesRequest.every(requestGrade => grades?.includes(requestGrade))) {
          return HttpResponse.json(response)
        } else {
          logMismatchStubError('grades', gradesRequest, grades)
          return HttpResponse.error()
        }
      }

      const levelsRequest = body.levels && body.levels.length > 0 ? body.levels : []
      if (levelsRequest.length > 0) {
        if (levelsRequest.every(requestLevel => levels?.includes(requestLevel))) {
          return HttpResponse.json(response)
        } else {
          logMismatchStubError('levels', levelsRequest, levels)
          return HttpResponse.error()
        }
      }

      if (body.strokes) {
        if (body.strokes === strokes) {
          return HttpResponse.json(response)
        } else {
          logMismatchStubError('strokes', body.strokes, strokes)
          return HttpResponse.error()
        }
      }

      return HttpResponse.json(response)
    })
  ]
}