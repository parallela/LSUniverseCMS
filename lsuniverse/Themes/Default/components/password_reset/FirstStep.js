import React, { useState } from "react";
import { useTranslation } from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";

const FirstStep = props => {
    const t = useTranslation();
    const h = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
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

        if(!reCaptcha) {
            setError(t('auth.reCaptcha'));
            return false;
        }
        
        const rawResponse = await fetch("/api/user/password/forget/generate", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await rawResponse.json();

        if (jsonResponse.message) {
            setError("");
            setMessage(
                t("auth.reset-password-success") +
                    ` 
            Server Message: ${jsonResponse.message}
            `
            );
            _pushToSecondStep();
            return true;
        } else if (jsonResponse.error) {
            setError(
                t("auth.reset-password-failed") +
                    `
            
            Server Error Message: ${jsonResponse.error}
            `
            );

            return false;
        }
    };

    return (
        <div className="card col-md-6">
            <div className="card-body">
                <h5 className="card-title">
                    {t("home.first_step_forget_password")}
                </h5>
                <hr />

                {error != "" && <Messages type={"danger"} message={error} />}
                {message != "" && (
                    <Messages type={"success"} message={message} />
                )}

                <form onSubmit={_handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">{t("home.email")}</label>
                        <input
                            type="email"
                            className="form-control"
                            required
                            id="email"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            placeholder="email@example.com"
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
                            {t("auth.reset-button")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FirstStep;
