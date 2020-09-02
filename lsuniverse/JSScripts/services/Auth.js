import Cookies from "universal-cookie";
import {_networkUserGet} from "../network/Network_UserGet";

const cookies = new Cookies();

export const getUser = async () => {
    const req = await _networkUserGet();
    return await req.json();
}

export const getToken = () => {
    return localStorage.getItem('token');
}
