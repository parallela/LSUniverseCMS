const initialState = {
    loading: true,
    error: false,
    data: [],
    fetched: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_USER_COUNTERS':
            return {...state, loading: true, fetched: false}
            break;
        case 'SUCCESS_FETCHING_COUNTERS':
            return {
                ...state,
                loading: false,
                fetched: true,
                data: action.payload
            }
            break;
    }
    return state;
}
