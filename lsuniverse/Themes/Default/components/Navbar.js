import React from "react";
import Logo from "../assets/img/logo.png"
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Navbar = props => {
    const t = useTranslation();
    const categories = props.categories.data;

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white bg-gray-900">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                       href="#">
                        <img src={Logo} className="logo"/>
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white font-bold no-underline"
                               href="#">{t("home.nav-home")}</a>
                        </li>
                        {categories.map((category, key) => (
                            <li key={key} className="mr-3">
                                <Link className="inline-block py-2 px-4 text-white font-bold no-underline"
                                      to={`/page/${category.slug}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={"/login"} id="navAction"
                          className="mx-auto lg:mx-0 hover:underline _bg-light_gray text-white font-bold rounded mt-4 lg:mt-0 py-2 px-8 shadow opacity-75">
                        <i className="fas fa-user"></i> &nbsp; {t("home.auth")}
                    </Link>
                </div>
            </div>

            <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
        </nav>
    )
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Navbar)
