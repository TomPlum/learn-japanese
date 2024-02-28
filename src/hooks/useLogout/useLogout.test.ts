import { localStorageMock, testUser } from "setupTests.ts";
import { renderHook } from "@testing-library/react";
import useLogout from "hooks/useLogout";

describe('Logout Hook', () => {
  it('should clear the user from local storage', () => {
    localStorageMock.setItem('user', JSON.stringify(testUser))
    expect(localStorageMock.getItem('user')).toStrictEqual(JSON.stringify(testUser))
    const { result } = renderHook(useLogout)
    result.current.logout()
    expect(localStorageMock.getItem('user')).toBeUndefined()
  })
})