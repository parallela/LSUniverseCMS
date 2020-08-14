import React, {useEffect, useState} from "react";
import { getLanguage } from "react-multi-lang";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { Authenticator, UserData } from "../services/Authenticator";

const Navbar = props => {
    const t = useTranslation();
    const location = useLocation();
    const auth = Authenticator();
    const [user, setUser] = useState({});
    const userData = async () => {
        setUser(await UserData());
    };


    useEffect(() => {
        userData();
    }, []);



    const isActive = path => {
        if (path == location.pathname) {
            return true;
        }
        return false;
    };

    return (
        <>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <div className="site-navbar-wrap bg-white">
                <div className="site-navbar-top">
                    <div className="container py-2">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-6 col-lg-2">
                                <a
                                    href="index.html"
                                    className="d-flex align-items-center site-logo"
                                >
                                    <img src={"images/logo.png"} />
                                </a>
                            </div>

                            <div className="col-6 col-md-6 col-lg-10">
                                <ul className="unit-4 ml-auto text-right">
                                    <li className="text-left">
                                        <a href="#">
                                            <div className="d-flex align-items-center block-unit">
                                                <div className="icon mr-0 mr-md-4">
                                                    <span className="fl-bigmug-line-headphones32 h3"></span>
                                                </div>
                                                <div className="d-none d-lg-block">
                                                    <span className="d-block text-gray-500 text-uppercase">
                                                        {t("home.247-support")}
                                                    </span>
                                                    <span className="h6">
                                                        1-800-200-3911
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="text-left">
                                        <a href="#">
                                            <div className="d-flex align-items-center block-unit">
                                                <div className="icon mr-0 mr-md-4">
                                                    <span className="fl-bigmug-line-email64 h5"></span>
                                                </div>
                                                <div className="d-none d-lg-block">
                                                    <span className="d-block text-gray-500 text-uppercase">
                                                        {t("home.email")}
                                                    </span>
                                                    <span className="h6">
                                                        mail@domain.com
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="text-left">
                                        <a href="#">
                                            <div className="d-flex align-items-center block-unit">
                                                <div className="icon mr-0 mr-md-4">
                                                    <span className="fl-bigmug-line-chat55 h2"></span>
                                                </div>
                                                <div className="d-none d-lg-block">
                                                    <span className="d-block text-gray-500 text-uppercase">
                                                        {t("home.live")}
                                                    </span>
                                                    <span className="h6">
                                                        {t(
                                                            "home.live-chat-text"
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-navbar bg-dark">
                    <div className="container py-1">
                        <div className="row align-items-center">
                            <div className="col-4 col-md-4 col-lg-8">
                                <nav
                                    className="site-navigation text-left"
                                    role="navigation"
                                >
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <a
                                            href="#"
                                            className="site-menu-toggle js-menu-toggle text-white"
                                        >
                                            <span className="icon-menu h3"></span>
                                        </a>
                                    </div>

                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li
                                            className={
                                                isActive("/") ? "active" : ""
                                            }
                                        >
                                            <Link to={"/"}>
                                                {t("home.nav-home")}
                                            </Link>
                                        </li>
                                        {/*<li className="has-children">*/}
                                        {/*    <a href="hosting.html">Hosting</a>*/}
                                        {/*    <ul className="dropdown arrow-top">*/}
                                        {/*        <li><a href="#">Shared Hosting</a></li>*/}
                                        {/*        <li><a href="#">Dedicated Hosting</a></li>*/}
                                        {/*        <li><a href="#">Premium Hosting</a></li>*/}
                                        {/*        <li><a href="#">Cloud Hosting</a></li>*/}
                                        {/*        <li className="has-children">*/}
                                        {/*            <a href="#">Sub Menu</a>*/}
                                        {/*            <ul className="dropdown">*/}
                                        {/*                <li><a href="#">Menu One</a></li>*/}
                                        {/*                <li><a href="#">Menu Two</a></li>*/}
                                        {/*                <li><a href="#">Menu Three</a></li>*/}
                                        {/*            </ul>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*</li>*/}
                                        {/*<li><a href="blog.html">Blog</a></li>*/}
                                        {/*<li><a href="contact.html">Contact</a></li>*/}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-8 col-md-8 col-lg-4 text-right">
                                {auth && (
                                   <button  
                                        className="btn btn-primary btn-outline-primary rounded-0 text-white py-2 px-4">
                                            {user.name}
                                        </button>
                                )}
                                {!auth && (
                                    <Link
                                        to={"/auth"}
                                        className="btn btn-primary btn-outline-primary rounded-0 text-white py-2 px-4"
                                    >
                                        {t("home.register")}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
