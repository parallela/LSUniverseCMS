import React from "react";
import {useTranslation} from "react-multi-lang";
import {useState, useEffect} from "react";
import Messages from "./Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {UserData} from "../../../JSScripts/services/Authenticator";
import {useHistory} from "react-router-dom";
import {_networkLoginUser} from "../../../JSScripts/network/Network_LoginUser";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const t = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [reCaptcha, setRecaptcha] = useState(true); // TODO: Return it to false;
    /*
     *  userLA = User Login Attempts
     */
    const [userLA, setUserLA] = useState(0);
    const h = useHistory();

    const loaderStatus = status => {
        setTimeout(() => {
            setLoading(status);
        }, 1200);
        setTimeout(() => {
            setError("");
            setMessage("");
        }, 5000);
    };

    const change_password = e => {
        e.preventDefault();
        h.push("/password/reset?step=1");
    };

    const _reCaptchaCancel = value => {
        setRecaptcha(false);
    };

    const _reCaptchaConfirmation = value => {
        setRecaptcha(true);
    };

    const _handleSubmit = async e => {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        };

        if (userLA > 5) {
            setError(true);
            setErrorMessages({"tooManyAttempts": t("auth.tooManyAttempts")});

            return false;
        }

        if (!reCaptcha) {
            loaderStatus(false);
            setError(true);
            setErrorMessages({"auth": t("auth.reCaptcha")});

            return false;
        }


        loaderStatus(true);
        const req = await _networkLoginUser(data);
        const jsonResponse = await req.json();

        if(req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setError(true);
            setErrorMessages(jsonResponse.errors);
            loaderStatus(false);
            setUserLA(userLA + 1);
            setShowForm(true);

            return false;

        }

        if (jsonResponse.access_token) {
            localStorage.setItem("token", jsonResponse.access_token);
            setMessage(t("auth.login-success"));
            loaderStatus(false);
            setShowForm(false);
            UserData();


            setTimeout(() => {
                window.location.href = "/";
            }, 1500);

            return true;
        }
    };

    return (
        <div className="col-md-12 col-lg-6 mb-5">
            {error &&
            Object.entries(errorMessages).map((value, key) => (
                    <Messages key={key} type={"danger"} message={value[1].toString()}/>
                )
            )}

            {message != "" && <Messages type={"success"} message={message}/>}
            {showForm && (
                <div></div>
            )}
        </div>
    );
};

export default Login;
