import {_networkRegisterUser} from "../../network/Network_RegisterUser";

const registerUser = async (data) => {
    const req = await _networkRegisterUser(data);
    return await req;
}

export const Action_Register = (data) => dispatch => {
    return registerUser(data);
}
