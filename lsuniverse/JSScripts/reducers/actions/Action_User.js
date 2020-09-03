import {getUser} from "../../services/Auth";


export const Action_User = (dispatch) => {
        dispatch({type: "FETCHING_USER"})
        getUser().then(u => {
            dispatch({
                type: 'USER_FETCHED',
                payload: u
            });
        }).catch(error => {
            dispatch({
               type: 'USER_PROBLEM',
               payload: error
            });
        });

    }
;
