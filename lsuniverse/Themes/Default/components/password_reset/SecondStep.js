import React, {useState} from "react";
import {useTranslation} from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory} from "react-router-dom";
import {_networkPasswordSecondStep} from "../../../../JSScripts/network/Network_PasswordRecover";

const SecondStep = props => {
    const t = useTranslation();
    const h = useHistory();
    const [key, setKey] = useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [reCaptcha, setRecaptcha] = useState(false);


    const _pushToFinalStep = () => {
        setTimeout(() => {
            h.push('/password/reset?step=3');
        }, 2000)

        return true;
    }

    const _reCaptchaCancel = value => {
        setRecaptcha(false);
    };

    const _reCaptchaConfirmation = value => {
        setRecaptcha(true);
    };

    const _handleSubmit = async e => {
        e.preventDefault();

        let data = {
            token: key
        };

        if (!reCaptcha) {
            setError(true);
            setErrorMessages({"auth": t("auth.reCaptcha")});

            return false;
        }


        const req = await _networkPasswordSecondStep(data);
        const jsonResponse = await req.json();


        if (req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setErrorMessages({"failed": t('auth.reset-key-invalid')})
            setError(true);
            return false;
        }

        setError(false);
        setMessage(t('auth.reset-key-valid') + `

            Server Message: ${jsonResponse.message}
            `);
        _pushToFinalStep();
        localStorage.setItem('reset_password_token', key);

        return true;


    };

    return (
        <div></div>
    );
};

export default SecondStep;
