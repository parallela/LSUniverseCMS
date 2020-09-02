import {getToken} from "../services/Auth";

export const _networkLogoutUser = () => {
    const rawResponse = fetch("/api/auth/logout", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
