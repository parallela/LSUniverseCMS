import React from "react";
import { useTranslation } from "react-multi-lang";
import { useState, useEffect } from "react";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const t = useTranslation();
    const [loading, setLoading] = useState(false);

    return (
        <div className="col-md-12 col-lg-6 mb-5">
            <form action="#" className="p-5 bg-white">
                <h2 className="mb-4 text-black">{t("home.login")}</h2>

                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="email2">
                            {t("home.email")}
                        </label>
                        <input
                            type="email"
                            id="email2"
                            className="form-control rounded-0"
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="password">
                            {t("home.password")}
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control rounded-0"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-md-12">
                        <label
                            className="font-weight-normal"
                            htmlFor="remember"
                        >
                            <input type="checkbox" id="remember" />
                            {t("home.remember-me")}
                        </label>
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
                        <input
                            type="submit"
                            value={t("home.login")}
                            className="btn btn-primary  py-2 px-4 rounded-0"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
