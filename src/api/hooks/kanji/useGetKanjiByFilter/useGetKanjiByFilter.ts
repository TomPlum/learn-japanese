import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import useClient from "api/useClient";
import {
  KanjiByFilterProps,
  KanjiByFilterRequest,
  KanjiSearchResponseModel
} from "api/hooks/kanji/useGetKanjiByFilter/types.ts";
import { KanjiResponseModel } from "api/hooks/kanji/types.ts";
import { AxiosResponse } from 'axios'
import { KanjiSearch } from "service/KanjiService.ts";
import KanjiConverter from "converter/KanjiConverter.ts";

const converter = new KanjiConverter()

const useGetKanjiByFilter = ({ search, grades, levels, strokes, paging }: KanjiByFilterProps) => {
  const client = useClient()

  const getKanjiByFilter = useCallback(async (): Promise<KanjiSearch> => {
    const levelValues = levels?.map((level) => level.level) ?? []
    const gradeValues = grades?.map((grade) => grade.value) ?? []

    const request: KanjiByFilterRequest = {
      search,
      grades: gradeValues,
      levels: levelValues,
      strokes,
      paging
    }

    const { data } = await client.post<
      KanjiResponseModel,
      AxiosResponse<KanjiSearchResponseModel>,
      KanjiByFilterRequest
    >('/kanji/by-filter', request)

    return {
      kanji: data.results.map((result) => {
        return {
          field: result.field,
          value: converter.convert([result.value])[0]
        }
      }),
      pages: data.pages,
      quantity: data.total
    }
  }, [client])

  return useQuery({
    queryKey: [],
    queryFn: getKanjiByFilter
  })
}

export default useGetKanjiByFilter