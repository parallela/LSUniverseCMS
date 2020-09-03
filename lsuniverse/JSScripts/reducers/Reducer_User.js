const initialState = {
    loading: true,
    error: false,
    data: [],
    fetched: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_USER':
            return {...state, loading: true, fetched: false}
            break;
        case 'USER_FETCHED':
            return {
                ...state,
                loading: false,
                fetched: true,
                data: action.payload
            }
            break;
        case 'USER_PROBLEM':
            return {
                ...state,
                loading: false,
                fetched: true,
                data: [],
                error: true
            }
            break;
    }
    return state;
}
