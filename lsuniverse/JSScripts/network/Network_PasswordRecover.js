import {getRoute} from "../services/Route";

export const _networkPasswordFirstStep = async (data) => {
    const rawResponse = await fetch(getRoute('forget_generate'), {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return rawResponse;
}
export const _networkPasswordFinalStep = async (data) => {
    const rawResponse = await fetch(getRoute('forget_change'), {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
