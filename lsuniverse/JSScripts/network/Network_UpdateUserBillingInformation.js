import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkUpdateUserBillingInformation = async (data) => {
    const rawResponse = await fetch(getRoute('user_details'), {
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
