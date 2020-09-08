import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkUserGet = async () => {
    const rawResponse = await fetch(getRoute('me'), {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}

