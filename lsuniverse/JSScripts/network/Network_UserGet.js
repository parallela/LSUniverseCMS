import {UserData} from "../services/Authenticator";

export const _networkUserGet = () => {
    UserData();
    setInterval(() => {
        UserData();
    }, 10000)
}

