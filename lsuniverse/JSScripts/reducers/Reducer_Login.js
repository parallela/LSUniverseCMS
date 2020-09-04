const initialState = {
    loading: true,
    error: false,
    data: [],
    fetched: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGGING_IN_USER":
            return {...state, loading: true}
            break;
        case "LOG_IN_SUCCESS":
            return {...state, loading: false, error: null, data: action.payload, fetched: true}
            break;
        case "LOG_IN_FAILED":
            return {...state, loading: false, error: true, data: action.payload, fetched: false}
            break;
    }
    return state;
}
