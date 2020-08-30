import React from "react";
import FirstStep from "./password_reset/FirstStep";
import SecondStep from "./password_reset/SecondStep";
import FinalStep from "./password_reset/FinalStep";

const ChangePassword = props => {
    let searchForCurrentStep = window.location.search;
    let params = new URLSearchParams(searchForCurrentStep);
    const step = params.get("step");

    return (
        <div id="change_password">
            {step == 1 && <FirstStep/>}
            {step == 2 && <SecondStep/>}
            {step == 3 && <FinalStep/>}
        </div>
    );
};

export default ChangePassword;
