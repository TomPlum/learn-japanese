import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "api/queryKeys.ts";
import { useCallback } from "react";
import useClient from "api/useClient";
import KanjiConverter from "converter/KanjiConverter.ts";
import { KanjiResponseModel } from "repository/KanjiRepository.ts";
import { GetKanjiByCharacterProps } from "api/hooks/kanji/useGetKanjiByCharacter/types.ts";

const converter = new KanjiConverter()

const useGetKanjiByCharacter = (({ character }: GetKanjiByCharacterProps) => {
  const client = useClient()

  const getKanjiByCharacter = useCallback(async () => {
    const url = `/kanji/by-character/${character}`
    const { data } = await client.get<KanjiResponseModel>(url)
    return converter.convert([data])[0]
  }, [client])

  return useQuery({
    queryKey: [queryKeys.getKanjiByCharacter],
    queryFn: getKanjiByCharacter
  })
})

export default useGetKanjiByCharacter
