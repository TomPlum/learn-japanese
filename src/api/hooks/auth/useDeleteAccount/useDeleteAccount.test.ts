import { server } from "__test-utils__/msw.ts";
import {
  useDeleteAccountErrorHandlers,
  useDeleteAccountHandlers
} from "api/hooks/auth/useDeleteAccount/useDeleteAccount.handlers.ts";
import { renderHook } from "@testing-library/react";
import useDeleteAccount from "api/hooks/auth/useDeleteAccount/useDeleteAccount.ts";
import { wrapper } from "__test-utils__";
import UpdateResponse from "rest/response/UpdateResponse.ts";
import { useDeleteAccountResponses } from "api/hooks/auth/useDeleteAccount/useDeleteAccount.responses.ts";
import * as mockUseUserContext from 'context/UserContext/useUserContext.ts'

describe('Delete User Account API Hook', () => {
  it('should return a success response when the endpoint and HTTP method are correct', async () => {
    server.use(...useDeleteAccountHandlers)

    const clearContextSpy = vi.fn()
    vi.spyOn(mockUseUserContext, 'default').mockReturnValue({
      clearUser: clearContextSpy
    })

    const { result } = renderHook(useDeleteAccount, { wrapper })
    const response = await result.current.mutateAsync({
      password: 'test_password'
    })

    expect(clearContextSpy).toHaveBeenCalledTimes(1)
    expect(response).toStrictEqual<UpdateResponse>(useDeleteAccountResponses)
  })

  it('should return an error response when the API call fails for an unknown error', async () => {
    server.use(...useDeleteAccountErrorHandlers('RANDOM_ERROR'))
    const { result } = renderHook(useDeleteAccount, { wrapper })
    const response = await result.current.mutateAsync({
      password: 'test_password'
    })
    expect(response).toStrictEqual<UpdateResponse>({
      success: false,
      error: 'Something went wrong. Please try again.'
    })
  })

  it('should return an error response when the API call fails for a password incorrect error', async () => {
    server.use(...useDeleteAccountErrorHandlers('PASSWORD_DOES_NOT_MATCH'))
    const { result } = renderHook(useDeleteAccount, { wrapper })
    const response = await result.current.mutateAsync({
      password: 'test_password'
    })
    expect(response).toStrictEqual<UpdateResponse>({
      success: false,
      error: 'Your password is incorrect.'
    })
  })
})