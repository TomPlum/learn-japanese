import axios from "axios"
import { Environment } from "../utility/Environment"

const api = axios.create({
    baseURL: Environment.variable("API_HOST_URI")
})

export default api
