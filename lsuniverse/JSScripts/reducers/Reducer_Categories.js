import {_networkGetCategories} from "../network/Network_GetCategories";

const initialState = {
    loading: true,
    error: null,
    data: [],
    fetched: false,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_CATEGORIES":
            return {...state, loading: true}
            break;
        case "CATEGORIES_FETCHED":
            return {...state, loading: false, fetched: true, data: action.payload}
            break;
        case "CATEGORIES_PROBLEM":
            return {...state, error: true, loading: false, fetched: false, data: []}
            break;
    }

    return state;
}
