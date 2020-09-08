import {getToken} from "../services/Auth";
import {getRoute} from "../services/Route";

export const _networkGetDepartments = async () => {
    const rawResponse = await fetch(getRoute('site_departments'), {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return rawResponse;
}
