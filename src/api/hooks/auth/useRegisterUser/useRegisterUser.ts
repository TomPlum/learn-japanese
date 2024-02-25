import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import useClient from "api/useClient";
import { RegistrationRequest, SignUpResponse } from "api/hooks/auth/useRegisterUser/types.ts";
import { AxiosResponse } from "axios";
import { mutationKeys } from "api/mutationKeys.ts";

const useRegisterUser = () => {
  const client = useClient()

  const registerUser = useCallback(async (request: RegistrationRequest): Promise<SignUpResponse> => {
    const { data } = await client.post<
      RegistrationRequest,
      AxiosResponse<SignUpResponse>,
      RegistrationRequest
    >('/user/register', request)

    return data
  }, [client])

  return useMutation({
    mutationFn: registerUser,
    mutationKey: [mutationKeys.register]
  })
}

export default useRegisterUser