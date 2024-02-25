import { http, HttpResponse, RequestHandler } from "msw";
import { useRegisterUserResponses } from "api/hooks/auth/useRegisterUser/useRegisterUser.responses.ts";

export const useRegisterUserHandlers: RequestHandler[] = [
  http.post('*/user/register', () => {
    return HttpResponse.json(useRegisterUserResponses)
  })
]