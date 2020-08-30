import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import Messages from "./Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {_networkRegisterUser} from "../../../JSScripts/network/Network_RegisterUser";

const Register = props => {
    const t = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const [reCaptcha, setRecaptcha] = useState(true); // TODO: back value to false;

    const _reCaptchaCancel = value => {
        setRecaptcha(false);
    };

    const _reCaptchaConfirmation = value => {
        setRecaptcha(true);
    };

    const loaderStatus = status => {
        setTimeout(() => {
            setLoading(status);
        }, 1200);
        setTimeout(() => {
            setError(false);
            setMessage("");
        }, 5000);
    };

    const _handleSubmit = async e => {
        e.preventDefault();

        if (!reCaptcha) {
            loaderStatus(false);
            setError(true);
            setErrorMessages({"auth": t("auth.reCaptcha")});

            return false;
        }


        let data = {
            name: name,
            email: email,
            password: password,
            re_password: confirmPassword
        };

        setLoading(true);
        const req = await _networkRegisterUser(data);
        const jsonResponse = await req.json();

        if (req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setShowForm(true);
            loaderStatus(false);
            setErrorMessages(jsonResponse.errors);
            setError(true);

            return false;


        }

        setShowForm(false);
        loaderStatus(false);
        setMessage(t("auth.success"));

        return true;
    };

    return (
        <div>
            {error &&
            Object.entries(errorMessages).map((value, key) => (
                    <Messages key={key} type={"danger"} message={value[1].toString()}/>
                )
            )}

            {message != "" && <Messages type={"success"} message={message}/>}
            {showForm && (
            <div>TODO</div>
            )}
        </div>
    );
};
export default Register;
