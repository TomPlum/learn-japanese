import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import useClient from "api/useClient";
import { LoginRequest, LoginResponse } from "api/hooks/auth/useLogin/types.ts";
import { AxiosResponse } from "axios";
import { mutationKeys } from "api/mutationKeys.ts";

const useLogin = () => {
  const client = useClient()

  const login = useCallback(async (request: LoginRequest): Promise<LoginResponse> => {
    const { data } = await client.post<
      LoginRequest,
      AxiosResponse<LoginResponse>,
      LoginRequest
    >('/user/login', request)

    return data
  }, [client])

  return useMutation({
    mutationFn: login,
    mutationKey: [mutationKeys.login]
  })
}

export default useLogin