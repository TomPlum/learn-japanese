import useClient from "api/useClient";
import { useCallback } from "react";
import UpdateResponse from "rest/response/UpdateResponse.ts";
import { useUserContext } from "context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { mutationKeys } from "api/mutationKeys.ts";
import { DeleteAccountArgs } from "api/hooks/auth/useDeleteAccount/types.ts";
import { AxiosResponse } from "axios";

const useDeleteAccount = () => {
  const client = useClient()
  const { clearUser } = useUserContext()

  const deleteAccount = useCallback(async ({ password }: DeleteAccountArgs): Promise<UpdateResponse> => {
    try {
      await client.delete<
        DeleteAccountArgs,
        AxiosResponse<UpdateResponse>,
        DeleteAccountArgs
      >('/user/delete', {
        password
      })

      clearUser()

      return {
        success: true
      }
    } catch (e) {
      const error = e.response?.data?.error ?? 'UNKNOWN'

      return {
        success: false,
        error:
          error === "PASSWORD_DOES_NOT_MATCH"
            ? "Your password is incorrect."
            : "Something went wrong. Please try again."
      }
    }
  }, [client, clearUser])

  return useMutation({
    mutationFn: deleteAccount,
    mutationKey: [mutationKeys.deleteUser],
  })
}

export default useDeleteAccount