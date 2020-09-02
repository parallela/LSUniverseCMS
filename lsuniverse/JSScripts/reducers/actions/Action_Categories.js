import {_networkGetCategories} from "../../network/Network_GetCategories";

const getCategories = async () => {
    const req = await _networkGetCategories();
    return await req.json();
}

export const Action_Categories = (dispatch) => {
    dispatch({type: "FETCHING_CATEGORIES"});

    getCategories().then(d => {
        dispatch({
            type: "CATEGORIES_FETCHED",
            payload: d
        });
    }).catch(error => {
        dispatch({
            type: "CATEGORIES_PROBLEM",
            payload: error
        })
    });
}
