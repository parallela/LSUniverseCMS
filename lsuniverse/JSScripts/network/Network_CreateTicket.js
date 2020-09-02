import {getToken} from "../services/Auth";

export const _networkCreateTicket = async (data) => {
    const rawResponse = await fetch('/api/user/tickets/create', {
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

export const _networkCreateTicketAnswer = async (data) => {
    const rawResponse = await fetch(`/api/user/tickets/create/${props.ticketID}`, {
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
