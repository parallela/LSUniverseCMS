import {_networkLoginUser} from "../../network/Network_LoginUser";

const loginUser = async (data) => {
    const req = await _networkLoginUser(data);
    return await req;
}

export const Action_Login = (data) => dispatch => {
    dispatch({type: "LOGGING_IN_THE_USER"});

    // TODO

    // loginUser().then((res) => {
    //         const json = res.json();
    //         if (res.status !== 200 && res.status !== 201) {
    //             dispatch({type: "LOG_IN_FAILED", payload: json})
    //             return false;
    //         }
    //         return json;
    //     }
    // ).then(d => {
    //     if (d !== false) {
    //         dispatch({type: "LOG_IN_SUCCESS", payload: d});
    //     }
    // })

}
