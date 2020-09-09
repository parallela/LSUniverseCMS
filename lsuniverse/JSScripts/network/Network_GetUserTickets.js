import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkGetUserTickets = async () => {
    const rawResponse = await fetch(getRoute('get_user_tickets'), {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
