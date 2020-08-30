import React, {useState} from "react";
import {useTranslation} from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory} from "react-router-dom";
import {_networkPasswordFirstStep} from "../../../../JSScripts/network/Network_PasswordRecover";

const FirstStep = props => {
    const t = useTranslation();
    const h = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [reCaptcha, setRecaptcha] = useState(false);

    const _reCaptchaCancel = value => {
        setRecaptcha(false);
    }

    const _pushToSecondStep = () => {
        setTimeout(() => {
            h.push('/password/reset?step=2');
        }, 2000);
    }

    const _reCaptchaConfirmation = value => {
        setRecaptcha(true);
    };

    const _handleSubmit = async e => {
        e.preventDefault();

        let data = {
            email: email
        };

        if (!reCaptcha) {
            setError(true);
            setErrorMessages({"auth": t("auth.reCaptcha")});

            return false;
        }


        const req = await _networkPasswordFirstStep(data)
        const jsonResponse = await req.json();


        if (req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setError(true);
            setErrorMessages({
                "failed":
                    t("auth.reset-password-failed")
            });

            return false;


        }

        setError(false);
        setMessage(
            t("auth.reset-password-success") +
            `
            Server Message: ${jsonResponse.message}
            `
        );
        _pushToSecondStep();
        return true;

    };

    return (
        <div></div>
    );
};

export default FirstStep;
