import React from "react";
import { useTranslation } from "react-multi-lang";
import { useState, useEffect } from "react";
import Messages from "./Messages";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const t = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    
    const loaderStatus = status => {
        setTimeout(() => {
            setLoading(status);
        }, 1200);
        setTimeout(() => {
            setError("");
            setMessage("");
        }, 5000);
    };
    const _handleSubmit = async e => {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        };

        const rawResponse = await fetch("api/auth/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        loaderStatus(true);
        const jsonResponse = await rawResponse.json();

        if (jsonResponse.access_token) {
            localStorage.setItem("token", jsonResponse.access_token);
            setMessage(t("auth.login-success"));
            loaderStatus(false);
            setShowForm(false);
            window.location.href = '/';
        } else if (jsonResponse.error) {
            setError(jsonResponse.error);
            loaderStatus(false);
            setShowForm(true);
        }
    };

    return (
        <div className="col-md-12 col-lg-6 mb-5">
            {error != "" && <Messages type={"danger"} message={error} />}
            {message != "" && <Messages type={"success"} message={message} />}
            {showForm && (
                <form action="#" className="p-5 bg-white">
                    <h2 className="mb-4 text-black">{t("home.login")}</h2>

                    <div className="row form-group">
                        <div className="col-md-12">
                            <label
                                className="font-weight-bold"
                                htmlFor="email2"
                            >
                                {t("home.email")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
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
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="form-control rounded-0"
                            />
                        </div>
                    </div>

                    <div className="row form-group mb-2">
                        <div className="col-md-12">
                            <p>
                                {t("home.forget-password")}?{" "}
                                <a href="#">click here</a>
                            </p>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-md-12">
                            {loading && <i className="fas fa-sync fa-spin"></i>}
                            {!loading && (
                                <input
                                    type="submit"
                                    value={t("home.login")}
                                    onClick={_handleSubmit}
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

export default Login;