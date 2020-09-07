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
    const req = await _networkPasswordSecondStep(data);
    return await req;
}

const ThirdStep = async (data) => {
    const req = await _networkPasswordFinalStep(data);
    return await req;
}

export const Action_Changepassword = (data, step) => dispatch => {
    let method = FirstStep(data);
    switch (step) {
        case 2:
            method = SecondStep(data);
        case 3:
            method = ThirdStep(data);
    }

    return method;
}
