import React, { useState } from "react";
import { useTranslation } from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";

const FinalStep = props => {
    const t = useTranslation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [reCaptcha, setRecaptcha] = useState(false);


    const _pushToAuth = () => {
        setTimeout(() => {
            window.location.href = '/auth';
        },2000)
        
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
            setError(t("auth.reCaptcha"));
            return false;
        }


        const rawResponse = await fetch('/api/user/password/forget/change', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await rawResponse.json();

        if(jsonResponse.message) {
            setMessage(t('auth.password-changed'));
            setError("");
            _pushToAuth();
            
            return true;
        } else if(jsonResponse.error) {
            setMessage("");
            setError(t('auth.password-notchanged') + `
                Server Message: ${jsonResponse.error}
            `)

            return false;
        }
        
    };

    return (
        <div className="card col-md-6">
            <div className="card-body">
                <h5 className="card-title">
                    {t("home.third_step_forget_password")}
                </h5>
                <hr />

                {error != "" && <Messages type={"danger"} message={error} />}
                {message != "" && (
                    <Messages type={"success"} message={message} />
                )}

                <form onSubmit={_handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">{t("home.password")}</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                            minLength="8"
                            id="password"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                            placeholder={t("home.password")}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t("home.re-password")}</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                            minLength="8"
                            id="password_confirm"
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                            }}
                            placeholder={t("home.re-password")}
                        />
                    </div>



                    <div className="form-group">
                        <ReCAPTCHA
                            sitekey={"6Lc8LL8ZAAAAAAOp8OPeGrbaUnp76x9A2sXM6Uv0"}
                            onChange={_reCaptchaConfirmation}
                            onExpired={_reCaptchaCancel}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary btn-outline-default text-white"
                        >
                            {t("home.confirm")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FinalStep;

