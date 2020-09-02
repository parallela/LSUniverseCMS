const initialState = {
    loading: true,
    error: null,
    data: [],
    fetched: false,
}

export default (state = initialState, action) => {
    console.log(action, state);

    switch (action.type) {
        case 'FETCHING_USER':
            return {...state, loading: true}
            break;
        case 'USER_FETCHED':
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
