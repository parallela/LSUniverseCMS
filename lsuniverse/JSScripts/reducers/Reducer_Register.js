const initialState = {
    loading: true,
    error: false,
    data: [],
    fetched: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "REGISTERING_USER":
            return {...state, loading: true}
            break;
        case "REGISTER_SUCCESS":
            return {...state, loading: false, error: null, data: action.payload, fetched: true}
            break;
        case "REGISTER_FAILED":
            return {...state, loading: false, error: true, data: action.payload, fetched: false}
            break;
    }
    return state;
}
