import { http, HttpResponse, RequestHandler } from "msw";
import { useLoginResponses } from "api/hooks/auth/useLogin/useLogin.responses.ts";

export const useLoginHandlers: RequestHandler[] = [
  http.post('*/user/login', () => {
    return HttpResponse.json(useLoginResponses)
  })
]