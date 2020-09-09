import {getUser} from "../../services/Auth";
import {_networkGetUserTickets} from "../../network/Network_GetUserTickets";
import {_networkGetUserServices} from "../../network/Network_GetUserServices";

const getUserTickets = async () => {
    const req = await _networkGetUserTickets();
    return await req.json();
}

const getUserServices = async () => {
    const req = await _networkGetUserServices()
    return await req.json();
}

export const Action_User = (dispatch) => {
        dispatch({type: "FETCHING_USER"})
        getUser().then(u => {
            dispatch({
                type: 'USER_FETCHED',
                payload: u
            });
        }).catch(error => {
            dispatch({
                type: 'USER_PROBLEM',
                payload: error
            });
        });

    }
;
export const Action_GetUserAltData = async (dispatch) => {
    dispatch({type: "FETCHING_USER_COUNTERS"})

    const tickets = await getUserTickets();
    const services = await getUserServices();
    const data = {
        tickets: tickets,
        services: services,
        //TODO: Invoices
        invoices: {}
    }
    dispatch({type: "SUCCESS_FETCHING_COUNTERS", payload: data})

}
