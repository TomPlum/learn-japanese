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
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";
import { KanjiSettingsBuilder } from "types/session/settings/data/KanjiSettings.ts";

const converter = new KanjiConverter()

const useGetKanjiPage = () => {
  const client = useClient()

  /**
   * Retrieves a single page of kanji characters with the given size.
   * Kyoiku grades can optionally be provided to narrow the search scope.
   * @param page The page to retrieve. Starts from 0.
   * @param size The size of the page.
   * @param grades The grades to include. Omitting includes all.
   */
  const getKanjiPage = useCallback(async ({
    grades,
    pagination = { page: 0, size: 9999 }
  }: GetKanjiPageArgs): Promise<Paged<Kanji>> => {
    const settingsBuilder = new KanjiSettingsBuilder()

    if (!grades || grades.length === 0) {
      settingsBuilder.withGrades(KyoikuGrade.ALL)
    } else {
      settingsBuilder.withGrades(grades)
    }

    const settings = settingsBuilder.build()

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