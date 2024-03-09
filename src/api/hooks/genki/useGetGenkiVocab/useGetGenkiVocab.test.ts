import { renderHook, waitFor } from "@testing-library/react";
import useGetGenkiVocab from "api/hooks/genki/useGetGenkiVocab/useGetGenkiVocab.ts";
import { wrapper } from "__test-utils__";
import { GenkiDefinitions } from "api/hooks/genki/useGetGenkiVocab/types.ts";
import GenkiDefinition from "types/learn/GenkiDefinition.ts";
import { server } from "__test-utils__/msw.ts";
import {
  useGetEmptyGenkiVocabHandlers,
  useGetGenkiVocabHandlers
} from "api/hooks/genki/useGetGenkiVocab/useGetGenkiVocab.handlers.ts";

describe('Get Genki Vocabulary API Hook', () => {
  it('should return a response if the HTTP method and endpoint is correct', async () => {
    server.use(...useGetGenkiVocabHandlers)

    const { result } = renderHook(useGetGenkiVocab, { wrapper })

    await waitFor(() => {
      expect(result.current.data).toStrictEqual<GenkiDefinitions[]>({
        definitions: [new GenkiDefinition(9, "blue", "あおい", "青い")]
      })
    })
  })

  it('should return an error message if there are no definitions in the API response', async () => {
    server.use(...useGetEmptyGenkiVocabHandlers)

    const { result } = renderHook(useGetGenkiVocab, { wrapper })

    await waitFor(() => {
      expect(result.current.data).toStrictEqual<GenkiDefinitions[]>({
        error: "No definitions were returned."
      })
    })
  })
})