import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import useClient from "api/useClient";
import {
  GetKanjiPageArgs,
  KanjiByGradeRequest, Paged,
  PagedKanjiResponseModel
} from "api/hooks/kanji/useGetKanjiPage/types.ts";
import { mutationKeys } from "api/mutationKeys.ts";
import KanjiConverter from "converter/KanjiConverter.ts";
import { AxiosResponse } from "axios";
import { Kanji } from "types/kanji/Kanji.ts";

const converter = new KanjiConverter()

const useGetKanjiPage = () => {
  const client = useClient()

  const getKanjiPage = useCallback(async ({
    settings,
    pagination = { page: 0, size: 9999 }
  }: GetKanjiPageArgs): Promise<Paged<Kanji>> => {
    const request: KanjiByGradeRequest = {
      grades: settings.grades.map((grade) => grade.value),
      quantity: settings.quantity,
      paging: pagination
    }

    const { data } = await client.post<
      KanjiByGradeRequest,
      AxiosResponse<PagedKanjiResponseModel>,
      KanjiByGradeRequest
    >('/kanji/by-grade', request)

    return {
      pages: data.pages,
      quantity: data.total ,
      results: converter.convert(data.results)
    }
  }, [client])

  return useMutation({
    mutationFn: getKanjiPage,
    mutationKey: [mutationKeys.getKanjiPage]
  })
}

export default useGetKanjiPage;