import UserContext from "context/UserContext/UserContext.ts";
import { useContext } from "react";

const useUserContext = () => useContext(UserContext)

export default useUserContext