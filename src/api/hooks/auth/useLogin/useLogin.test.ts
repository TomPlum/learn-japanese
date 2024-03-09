import { server } from "__test-utils__/msw.ts";
import { useLoginHandlers } from "api/hooks/auth/useLogin/useLogin.handlers.ts";
import { renderHook } from "@testing-library/react";
import useLogin from "api/hooks/auth/useLogin/useLogin.ts";
import { wrapper } from "__test-utils__";
import { useLoginResponses } from "api/hooks/auth/useLogin/useLogin.responses.ts";
import { LoginResponse } from "api/hooks/auth/useLogin/types.ts";

describe('User Login API Hook', () => {
  it('should return a response when the URL and HTTP method match', async () => {
    server.use(...useLoginHandlers)

    const { result } = renderHook(useLogin, { wrapper })

    const response = await result.current.mutateAsync({
      username: 'TomPlum',
      password: 'test'
    })

    expect(response).toStrictEqual<LoginResponse>(useLoginResponses)
  })
})