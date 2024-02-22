import { useMutation } from "@tanstack/react-query";
import useClient from "api/useClient";
import { useCallback } from "react";
import { GetKanjiByTermArgs } from "api/hooks/kanji/useGetKanjiByTerm/types.ts";
import { mutationKeys } from "api/mutationKeys.ts";
import { KanjiSearchResponseModel } from "api/hooks/kanji/useGetKanjiByFilter";
import { AxiosResponse } from "axios";
import { PaginationRequest } from "rest/request/PaginationRequest.ts";
import KanjiConverter from "converter/KanjiConverter.ts";
import { KanjiSearch } from "service/KanjiService.ts";

const converter = new KanjiConverter()

const useGetKanjiByTerm = () => {
  const client = useClient()

  const convertKanjiResponseModel = useCallback((response: KanjiSearchResponseModel) => {
    return {
      results: response.results.map((result) => {
        return {
          field: result.field,
          value: converter.convert([result.value])[0]
        }
      }),
      pages: response.pages,
      quantity: response.total
    }
  }, [])


  /**
   * Retrieves all the kanji that match the given search term.
   * @param search The term to search by.
   * @param pagination Information about the pagination.
   * @return results A collection of matching kanji and the field that it was matched on.
   */
  const getKanjiByTerm = useCallback(async ({
    search,
    pagination
  }: GetKanjiByTermArgs): Promise<KanjiSearch> => {
    const { data } = await client.post<
      PaginationRequest,
      AxiosResponse<KanjiSearchResponseModel>,
      PaginationRequest
    >(`/kanji/by-term/${search}`, pagination)

    const convertedResults = convertKanjiResponseModel(data)

    return {
      kanji: convertedResults.results,
      pages: convertedResults.pages,
      quantity: convertedResults.quantity
    }
  }, [client])

  return useMutation({
    mutationFn: getKanjiByTerm,
    mutationKey: [mutationKeys.getKanjiByTerm]
  })
}

export default useGetKanjiByTerm