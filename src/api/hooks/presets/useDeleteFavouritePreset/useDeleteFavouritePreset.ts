import useClient from "../../../useClient";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { DeleteFavouritePresetMutationArgs } from "./types.ts";
import UpdateResponse from "../../../../rest/response/UpdateResponse.ts";
import { mutationKeys } from "../../../mutationKeys.ts";

const useDeleteFavouritePreset = () => {
  const client = useClient()

  const deleteFavouritePreset = useCallback(async ({ id }: DeleteFavouritePresetMutationArgs): Promise<UpdateResponse> => {
    await client.delete(`/presets/favourites/delete?=${id}`)

    return {
      success: true
    }
  }, [client])

  return useMutation({
    mutationKey: [mutationKeys.deleteFavouritePreset],
    mutationFn: deleteFavouritePreset
  })
}

export default useDeleteFavouritePreset