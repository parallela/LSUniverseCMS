import {_networkCreateTicketAnswer} from "../../network/Network_CreateTicket";

const createTicket = async (data, id) => {
    const req = await _networkCreateTicketAnswer(data, id);
    return await req;
}

export const Action_CreateTicket = (data, id) => dispatch => {
    return createTicket(data, id);
}
