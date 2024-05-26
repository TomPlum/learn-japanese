import SessionMode from "types/session/SessionMode.ts";

export interface EditFavouritesModalProps {
  favourites: SessionMode[]
  onSuccess: () => void
  onDismiss: () => void
}