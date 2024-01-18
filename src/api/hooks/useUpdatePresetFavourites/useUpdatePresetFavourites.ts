import useClient from "api/useClient";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { UpdatePresetFavouritesMutationArgs } from "./types.ts";
import UpdateResponse from "rest/response/UpdateResponse.ts";
import { mutationKeys } from "api/mutationKeys.ts";

const useUpdatePresetFavourites = () => {
  const client = useClient()

  const updatePresetFavourites = useCallback(async ({ add, remove }: UpdatePresetFavouritesMutationArgs): Promise<UpdateResponse> => {
    await client.patch(`/presets/favourites/update`, {
      add,
      remove
    })

    return {
      success: true
    }
  }, [client])

  return useMutation({
    mutationKey: [mutationKeys.updatePresetFavourites],
    mutationFn: updatePresetFavourites
  })
}

export default useUpdatePresetFavourites