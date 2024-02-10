import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiByFilterResponses } from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.responses.ts";
import { KanjiSearchResponseModel } from "api/hooks/kanji/useGetKanjiByFilter/types.ts";

export interface GetKanjiByFilterMswArgs {
  response: KanjiSearchResponseModel
  search?: string
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

export const useGetCustomKanjiByFilterHandlers = ({ response, search }: GetKanjiByFilterMswArgs): RequestHandler[] => {
  return [
    http.post("*/kanji/by-filter", async ({ request }) => {
      const body = await request.formData()
      const searchParam = body.get('search')

      if (searchParam && searchParam != '') {
        if (searchParam === search) {
          return HttpResponse.json(response)
        } else {
          return HttpResponse.json(null, {
            status: 500,
            statusText: `Search field was set in the request as [${searchParam}] but did not match the stubbed value of [${search}]`
          })
        }
      }

      return HttpResponse.json(response)
    })
  ]
}