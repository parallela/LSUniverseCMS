import {getToken} from "../services/Auth";

export const _networkGetUserServices = async () => {
    const rawResponse = await fetch('/api/user/services', {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
