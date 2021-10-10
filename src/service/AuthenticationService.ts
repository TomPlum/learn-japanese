import RestClient, { APIResponse } from "../rest/RestClient";

export interface LoginResponse {
    username: string;
    email: string;
    nickname?: string;
    roles: string[];
    locked: boolean;
    expired: boolean;
    credentialsExpired: boolean;
    creationDate:string;
    enabled: boolean;
    token: string;
}

export interface SignUpResponse {
    username: string;
    email: string;
    nickname?: string;
}

const register = (username: string, email: string, password: string, nickname?: string): Promise<SignUpResponse> => {
    const request = { username: username, email: email, password: password, nickname: nickname };

    return RestClient.post<SignUpResponse>("/user/register", request).then(response => {
        if (!response.data) {
            throw Error("No data returned post user-registration.");
        }
        return response.data;
    });
}

const login = (username: string, password: string): Promise<LoginResponse> => {
    return RestClient.post<LoginResponse>("/user/login", {
        username: username,
        password: password
    }).then((response: APIResponse<LoginResponse>) => {
        if (response?.data?.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        } else {
            return Promise.reject({ errors: "An error occurred when trying to authenticate the user."} );
        }
        return response.data;
    }).catch((response: APIResponse<LoginResponse>) => {
        if (response.status === 401) {
            return Promise.reject("AUTHENTICATION_ERROR");
        }
        return Promise.reject("Unknown login error: " + response.errors);
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

export default { register, login, logout };
