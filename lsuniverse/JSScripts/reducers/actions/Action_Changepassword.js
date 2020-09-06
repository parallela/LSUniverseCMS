import {_networkPasswordFirstStep} from "../../network/Network_PasswordRecover";

const FirstStep = async(data) => {
   const req = await _networkPasswordFirstStep(data);
   return await req;
}

export const Action_Changepassword = (data) = dispatch => {
    switch (step) {
        case 1:
            return FirstStep(data.payload);
            break;
        case 2:
            break;
        case 3:
            break;
    }
}
