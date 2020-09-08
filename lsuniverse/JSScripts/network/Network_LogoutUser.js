import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkLogoutUser = async () => {
    const rawResponse = await fetch(getRoute('logout'), {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
