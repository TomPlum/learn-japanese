import axios, { Method } from "axios"
import { Environment } from "../utility/Environment";

export interface APIResponse<T> {
    data: T | undefined;
    errors: Error[];
}

class RestClient {
    private constructor() { }

    static async get<T>(endpoint: string): Promise<APIResponse<T>> {
        return await RestClient.makeRestRequest<T>("GET", endpoint);
    }

    static async post<T>(endpoint: string, body: {}):  Promise<APIResponse<T>> {
        return await RestClient.makeRestRequest<T>("POST", endpoint, body);
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
            if (response.data) {
                //console.log("Successfully received " + response.status + " response");
                return {
                    data: response.data,
                    errors: []
                };
            } else {
                return {
                    data: undefined,
                    errors: [new Error(response.statusText)]
                };
            }
        }).catch(e => {
            //console.log("An error occurred while making a request to " + endpoint, e);
            return {
                data: undefined,
                errors: [new Error(e)]
            }
        });
    }
}

export default RestClient;
