import axios, { AxiosError, Method } from "axios"
import { Environment } from "../utility/Environment";

export interface APIResponse<T> {
    data: T | undefined;
    errors: Error[];
    status: number;
}

class RestClient {
    static async get<T>(endpoint: string): Promise<APIResponse<T>> {
        return await RestClient.makeRestRequest<T>("GET", endpoint);
    }

    static async post<T>(endpoint: string, body: {}): Promise<APIResponse<T>> {
        return await RestClient.makeRestRequest<T>("POST", endpoint, body);
    }

    static async put<T>(endpoint: string, body?: {}): Promise<APIResponse<T>> {
        return await RestClient.makeRestRequest<T>("PUT", endpoint, body);
    }

    private static async makeRestRequest<T>(method: Method, endpoint: string, body?: object): Promise<APIResponse<T>> {
        const host = Environment.variable("API_HOST_URI");

        if (!host) {
            throw new ReferenceError('Host URI is not defined!');
        }

        if (!endpoint) {
            throw new ReferenceError("Endpoint is not defined!");
        }

        const URI = host + endpoint;
        //console.log("Sending " + method + " request to " + URI);

        return await axios(URI, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            data: body ? JSON.stringify(body) : undefined
        }).then(async response => {
                //console.log("Successfully received " + response.status + " response");
            return {
                errors: [],
                data: response.data,
                status: response.status
            };
        }).catch((e: AxiosError) => {
            //console.log("An error occurred while making a request to " + endpoint, e);
            if (e.response) {
                return Promise.reject({
                    data: undefined,
                    status: e.response.status,
                    errors: [new Error(e.response.data)]
                });
            } else if (e.request) {
                return Promise.reject({
                    data: undefined,
                    status: e.request.status,
                    errors: [new Error("No response returned from the API")]
                });
            } else {
                return Promise.reject({
                    data: undefined,
                    status: 400,
                    errors: [new Error("Something went wrong while setting up the request.")]
                });
            }
        });
    }
}

export default RestClient;
