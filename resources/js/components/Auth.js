import React from "react";
import Layout from "./Layout";
import { useTranslation } from "react-multi-lang";

const Auth = props => {
   const t = useTranslation();

    return (
        <Layout>
            <main>
                <div
                    className="unit-5 overlay"
                    style={{ backgroundImage: `url(images/hero_bg_1.jpg)` }}
                >
                    <div className="container text-center">
                        <h2 className="mb-0">{t("home.auth")}</h2>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mb-5">
                                <form action="#" className="p-5 bg-white">
                                    <h2 className="mb-4 text-black">
                                        {t("home.register")}
                                    </h2>
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
                                                className="form-control rounded-0"
                                            />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label
                                                className="font-weight-bold"
                                                htmlFor="email"
                                            >
                                                {t("home.email")}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
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
                                                className="form-control rounded-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input
                                                type="submit"
                                                value={t("home.register")}
                                                className="btn btn-primary  py-2 px-4 rounded-0"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-12 col-lg-6 mb-5">
                                <form action="#" className="p-5 bg-white">
                                    <h2 className="mb-4 text-black">
                                        {t("home.login")}
                                    </h2>

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
                                                id="email2"
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
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                />
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
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};
export default Auth;
