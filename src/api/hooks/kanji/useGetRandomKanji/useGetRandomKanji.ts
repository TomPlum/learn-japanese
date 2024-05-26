import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { queryKeys } from "api/queryKeys.ts";
import useClient from "api/useClient";
import { KanjiResponseModel } from "api/hooks/kanji/types.ts";
import KanjiConverter from "converter/KanjiConverter.ts";
import { Kanji } from "types/kanji/Kanji.ts";

const converter = new KanjiConverter()

const useGetRandomKanji = () => {
  const client = useClient()

  const getRandomKanji = useCallback(async (): Promise<Kanji> => {
    const uri = `/kanji/random`
    const { data } = await client.get<KanjiResponseModel>(uri)
    return converter.convert([data])[0]
  }, [client])

  return useQuery({
    queryFn: getRandomKanji,
    queryKey: [queryKeys.getRandomKanji]
  })
}

export default useGetRandomKanji