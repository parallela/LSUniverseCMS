import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import Messages from "./Messages";

const Register = props => {
    const t = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
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
            name: name,
            email: email,
            password: password,
            re_password: confirmPassword
        };
        setLoading(true);
        const rawResponse = await fetch("api/auth/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const jsonResponse = await rawResponse.json();

        if (jsonResponse.message) {
            setShowForm(false);
            loaderStatus(false);
            setMessage(t("auth.success"));
        } else if (jsonResponse.error) {
            setShowForm(true);
            loaderStatus(false);
            setError(jsonResponse.error);
        }
    };

    return (
        <div className="col-md-12 col-lg-6 mb-5">
            {error != "" && <Messages type={"danger"} message={error} />}
            {message != "" && <Messages type={"success"} message={message} />}
            {showForm && (
                <form action="#" className="p-5 bg-white">
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
                            {loading && <i className="fas fa-sync fa-spin"></i>}
                            {!loading && (
                                <input
                                    type="submit"
                                    value={t("home.register")}
                                    className="btn btn-primary  py-2 px-4 rounded-0"
                                    onClick={_handleSubmit}
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