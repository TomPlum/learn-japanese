import axios, { AxiosResponse } from "axios";
import { Environment } from "../utility/Environment";
import { store } from "../store";
import { refreshTokenInterceptor } from "./Interceptors";

const api = axios.create({
    baseURL: Environment.variable("API_HOST_URI"),
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.response.use((res: AxiosResponse) => {
    return res;
}, refreshTokenInterceptor);

export default api;
