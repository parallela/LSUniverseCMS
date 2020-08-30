import React, {useState} from "react";
import {useTranslation} from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory} from "react-router-dom";
import {_networkPasswordFinalStep} from "../../../../JSScripts/network/Network_PasswordRecover";

const FinalStep = props => {
    const t = useTranslation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [reCaptcha, setRecaptcha] = useState(false);


    const _pushToAuth = () => {
        setTimeout(() => {
            window.location.href = '/auth';
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
            password: password,
            re_password: confirmPassword,
            token: localStorage.getItem('reset_password_token')
        };

        if (!reCaptcha) {
            setError(true);
            setErrorMessages({"auth": t("auth.reCaptcha")});

            return false;
        }


        const req = await _networkPasswordFinalStep(data)
        const jsonResponse = await req.json();


        if (req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setError(true);
            setErrorMessages(jsonResponse.errors);

            return false;

        }

        setMessage(t('auth.password-changed'));
        setError(false);
        _pushToAuth();

        return true;

    };

    return (
        <div></div>
    );
};

export default FinalStep;

