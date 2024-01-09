import { useContext } from "react";
import NotificationContext from "context/NotificationContext/NotificationContext.ts";

const useNotificationContext = () => useContext(NotificationContext)

export default useNotificationContext