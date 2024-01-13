import { useContext } from "react";
import SessionSettingsContext from "context/SessionSettingsContext/SessionSettingsContext.tsx";

const useSessionSettingsContext = () => useContext(SessionSettingsContext)

export default useSessionSettingsContext