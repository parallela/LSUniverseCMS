import {getRoute} from "../services/Route";

export const _networkGetCategories = async () => {
    const rawResponse = await fetch(getRoute('site_categories'), {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    return rawResponse;
}
