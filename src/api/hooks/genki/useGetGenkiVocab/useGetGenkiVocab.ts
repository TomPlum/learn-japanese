import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "api/queryKeys.ts";
import useClient from "api/useClient";
import { useCallback } from "react";
import GenkiDefinition from "types/learn/GenkiDefinition.ts";
import { GenkiResponseData } from "api/hooks/genki/useGetGenkiVocab/types.ts";
import { AxiosResponse } from "axios";

const useGetGenkiVocab = () => {
  const client = useClient()

  /**
   * Retrieves all the vocabulary from all lesson in Genki I and II.
   * @return data All vocabulary data.
   */
  const getVocab = useCallback(async () => {
    try {
      const { data } = await client.get<
        GenkiResponseData,
        AxiosResponse<GenkiResponseData[]>
      >('/genki/all')

      if (data && data.length > 0) {
        const definitions = data.map((response) => {
          return new GenkiDefinition(
            response.lesson,
            response.meaning,
            response.kana,
            response.kanji
          )
        })

        return { definitions }
      } else {
        return { error: "No definitions were returned." }
      }
    } catch (e) {
      if (e.error) {
        return { error: e.error }
      } else {
        return { error: "An unknown error occurred." }
      }
    }
  }, [client])

  return useQuery({
    queryFn: getVocab,
    queryKey: [queryKeys.getAllGenkiVocab]
  })
}

export default useGetGenkiVocab