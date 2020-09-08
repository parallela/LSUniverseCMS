import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkGetTicketAnswers = async (id) => {
    const rawResponse = await fetch(getRoute('show_user_ticket', {id: id}), {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
