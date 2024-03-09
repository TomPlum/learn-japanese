import { server } from "__test-utils__/msw.ts";
import { useRegisterUserHandlers } from "api/hooks/auth/useRegisterUser/useRegisterUser.handlers.ts";
import { renderHook } from "@testing-library/react";
import useRegisterUser from "api/hooks/auth/useRegisterUser/useRegisterUser.ts";
import { wrapper } from "__test-utils__";
import { SignUpResponse } from "api/hooks/auth/useRegisterUser/types.ts";
import { useRegisterUserResponses } from "api/hooks/auth/useRegisterUser/useRegisterUser.responses.ts";

describe('Register User API Hook', () => {
  it('should return a valid response when the endpoint and HTTP method are correct', async () => {
    server.use(...useRegisterUserHandlers)

    const { result } = renderHook(useRegisterUser, { wrapper })

    const response = await result.current.mutateAsync({
      username: 'TomPlum',
      password: 'test',
      email: 'thomas.plumpton@hotmail.co.uk',
      nickname: 'Tom'
    })

    expect(response).toStrictEqual<SignUpResponse>(useRegisterUserResponses)
  })
})