import { createContext } from "react";
import { UserContextBag } from "context/UserContext/types.ts";

const UserContext = createContext<UserContextBag>({
  user: undefined,
  setUser: () => {
    console.debug('Failed to invoke setUser() as the UserContext has not been initialised.')
  },
  setPreferences: () => {
    console.debug('Failed to invoke setPreferences() as the UserContext has not been initialised.')
  },
  setPreference: () => {
    console.debug('Failed to invoke setPreference() as the UserContext has not been initialised.')
  },
  setNickName: () => {
    console.debug('Failed to invoke setNickName() as the UserContext has not been initialised.')
  },
  setAccessToken: () => {
    console.debug('Failed to invoke setAccessToken() as the UserContext has not been initialised.')
  },
  setRefreshToken: () => {
    console.debug('Failed to invoke setRefreshToken() as the UserContext has not been initialised.')
  },
  clearUser: () => {
    console.debug('Failed to invoke clearUser() as the UserContext has not been initialised.')
  }
})

export default UserContext