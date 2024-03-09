import axios, { AxiosInstance } from "axios"
import { ClientProps } from "./types.ts"
import { useState } from "react"
import { useUserContext } from "context/UserContext";
import { Environment } from "utility/Environment.ts";

const useClient = ({ headers }: ClientProps = {}): AxiosInstance => {
  const { user } = useUserContext()
  const [client] = useState<AxiosInstance>(createInstance)

  function createInstance(): AxiosInstance {
    const instance = axios.create()

    instance.defaults.baseURL = Environment.variable("API_HOST_URI")

    if (headers) {
      instance.interceptors.request.use((config) => {
        Object.entries(headers).forEach(([header, value]) => {
          config.headers[header] = value
        })

        return config
      })
    }

    if (user) {
      instance.interceptors.request.use((config) => {
        config.headers['Authorization'] = `Bearer ${user?.token}`
        return config
      })
    }

    return instance
  }

  return client
}

export default useClient