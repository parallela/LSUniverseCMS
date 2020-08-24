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
            <div className="container mt-4 mb-4">
                <div className="row justify-content-center">
                    {step == 1 && <FirstStep />}
                    {step == 2 && <SecondStep />}
                    {step == 3 && <FinalStep />}
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
