import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkGetUserServices = async () => {
    const rawResponse = await fetch(getRoute('get_user_services'), {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
