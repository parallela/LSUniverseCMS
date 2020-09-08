import {getRoute} from "../services/Route";

export const _networkRegisterUser = async (data) => {
    const rawResponse = await fetch(getRoute('register'), {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
