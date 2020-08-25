import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import Messages from "./Messages";
import ReCAPTCHA from "react-google-recaptcha";
import {registerValidation} from "../services/Authenticator";

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
        const rawResponse = await fetch("api/auth/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const jsonResponse = await rawResponse.json();

        if (rawResponse.status === 500) {
            return false;
        }

        if (rawResponse.status !== 200 && rawResponse.status !== 201) {
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
        <div className="col-md-12 col-lg-6 mb-5">
            {error &&
            Object.entries(errorMessages).map((value, key) => (
                    <Messages key={key} type={"danger"} message={value[1].toString()}/>
                )
            )}

            {message != "" && <Messages type={"success"} message={message}/>}
            {showForm && (
                <form
                    action="#"
                    onSubmit={_handleSubmit}
                    className="p-5 bg-white"
                >
                    <h2 className="mb-4 text-black">{t("home.register")}</h2>
                    <div className="row form-group">
                        <div className="col-md-12 mb-3 mb-md-0">
                            <label
                                className="font-weight-bold"
                                htmlFor="fullname"
                            >
                                {t("home.full-name")}
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                value={name}
                                required
                                onChange={e => {
                                    setName(e.target.value);
                                }}
                                className="form-control rounded-0"
                            />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label className="font-weight-bold" htmlFor="email">
                                {t("home.email")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="form-control rounded-0"
                            />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label
                                className="font-weight-bold"
                                htmlFor="password"
                            >
                                {t("home.password")}
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                minLength="8"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="form-control rounded-0"
                            />
                        </div>
                    </div>
                    <div className="row form-group mb-5">
                        <div className="col-md-12">
                            <label
                                className="font-weight-bold"
                                htmlFor="password2"
                            >
                                {t("home.re-password")}
                            </label>
                            <input
                                type="password"
                                id="password2"
                                required
                                minLength="8"
                                value={confirmPassword}
                                onChange={e => {
                                    setConfirmPassword(e.target.value);
                                }}
                                className="form-control rounded-0"
                            />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            {/*<ReCAPTCHA*/}
                            {/*    sitekey={*/}
                            {/*        "6Lc8LL8ZAAAAAAOp8OPeGrbaUnp76x9A2sXM6Uv0"*/}
                            {/*    }*/}
                            {/*    onExpired={_reCaptchaCancel}*/}
                            {/*    onChange={_reCaptchaConfirmation}*/}
                            {/*/>*/}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            {loading && <i className="fas fa-sync fa-spin"></i>}
                            {!loading && (
                                <input
                                    type="submit"
                                    value={t("home.register")}
                                    className="btn btn-primary  py-2 px-4 rounded-0"
                                />
                            )}
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};
export default Register;
