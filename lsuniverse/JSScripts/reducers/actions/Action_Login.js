import {_networkLoginUser} from "../../network/Network_LoginUser";

const loginUser = async (data) => {
    const req = await _networkLoginUser(data);
    return await req;
}

export const Action_Login = (data) => dispatch => {
    return loginUser(data);
}
