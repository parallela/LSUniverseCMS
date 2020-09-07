import {
    _networkPasswordFinalStep,
    _networkPasswordFirstStep,
    _networkPasswordSecondStep
} from "../../network/Network_PasswordRecover";

const FirstStep = async (data) => {
    const req = await _networkPasswordFirstStep(data);
    return await req;
}


const SecondStep = async (data) => {
    const req = await _networkPasswordFinalStep(data);
    return await req;
}


export const Action_Changepassword = (data, step) => dispatch => {
    return step===2 ? SecondStep(data) : FirstStep(data);
}
