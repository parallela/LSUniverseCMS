import React, { useState } from "react";
import { useTranslation } from "react-multi-lang";
import Messages from "../Messages";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";

const SecondStep = props => {
    const t = useTranslation();
    const h = useHistory();
    const [key, setKey] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [reCaptcha, setRecaptcha] = useState(false);


    const _pushToFinalStep = () => {
        setTimeout(() => {
            h.push('/password/reset?step=3');
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
            token: key
        };

        if (!reCaptcha) {
            setError(t("auth.reCaptcha"));
            return false;
        }


        const rawResponse = await fetch('/api/user/password/forget/check', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await rawResponse.json();

        if(jsonResponse.message) {
            setError("");
            setMessage(t('auth.reset-key-valid') + `  
            
            Server Message: ${jsonResponse.message}
            `);
            _pushToFinalStep();
            localStorage.setItem('reset_password_token', key);

            return true;
        } else if(jsonResponse.error) {
            setError(t('auth.reset-key-invalid'))
            return false;
        }
        
    };

    return (
        <div className="card col-md-6">
            <div className="card-body">
                <h5 className="card-title">
                    {t("home.second_step_forget_password")}
                </h5>
                <hr />

                {error != "" && <Messages type={"danger"} message={error} />}
                {message != "" && (
                    <Messages type={"success"} message={message} />
                )}

                <form onSubmit={_handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">{t("auth.reset-key")}</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="key"
                            onChange={e => {
                                setKey(e.target.value);
                            }}
                            placeholder={t("auth.reset-key")}
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

export default SecondStep;
