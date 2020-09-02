import {getToken} from "../services/Auth";

export const _networkUserGet = async () => {
    const rawResponse = await fetch('/api/auth/me', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}

