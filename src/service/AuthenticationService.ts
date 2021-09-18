import RestClient from "../rest/RestClient";

export interface LoginResponse {
    username: string;
    email: string;
    nickname?: string;
    roles: string[];
    locked: boolean;
    expired: boolean;
    credentialsExpired: boolean;
    enabled: boolean;
    token: string;
}

export interface SignUpResponse {
    username: string;
    email: string;
    nickname?: string;
}

const register = (username: string, email: string, password: string, nickname?: string): Promise<SignUpResponse> => {
    return RestClient.post<SignUpResponse>("/user/register", {
        username: username,
        email: email,
        password: password,
        nickname: nickname
    }).then(response => {
        if (!response.data) {
            throw Error("No data returned post user-registration.");
        }
        return response.data;
    }).catch(e => {
        throw Error(e);
    });
}

const login = (username: string, password: string): Promise<LoginResponse> => {
    return RestClient.post<LoginResponse>("/user/login", {
        username: username,
        password: password
    }).then(response => {
        if (response?.data?.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        } else {
            throw ReferenceError("No valid JWT returned for user [" + response?.data?.username + "]");
        }
        return response.data;
    }).catch(e => {
        throw Error(e);
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

export default { register, login, logout };
