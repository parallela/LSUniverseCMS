import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkCreateTicket = async (data) => {
    const rawResponse = await fetch(getRoute('create_user_ticket'), {
        method: 'POST',
        headers: {
            'Accept': 'applicaiton/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}

export const _networkCreateTicketAnswer = async (data, id) => {
    const rawResponse = await fetch(getRoute('create_user_ticket_answer', {id: id}), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
