import Cookies from "universal-cookie";
import {_networkUserGet} from "../network/Network_UserGet";


export const getUser = async () => {
    const req = await _networkUserGet();
    if (req.status !== 200) {
        localStorage.removeItem('auth_token');
    }

    return await req.json();
}

export const getToken = () => {
    return localStorage.getItem('auth_token');
}
