import React, {useState} from "react";
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getToken} from "../../../JSScripts/services/Auth";

const Navbar = props => {
    const t = useTranslation();
    const categories = props.categories.data;
    const settings = window._settings;
    // State of mobile navbar
    const [hidden, setHidden] = useState(true);

    const _turnOnMobileNavbar = e => {
        setHidden(false);
        if (!hidden) {
            setHidden(true);
        }
    }
//TODO: make mobile version of the navbar
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white bg-gray-900">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                       href="#">
                        <img src={settings['logo']} className="logo"/>
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1" onClick={_turnOnMobileNavbar}>
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu</title>
                            {hidden && <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>}
                            {!hidden &&
                            <path fill="#fffff"
                                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"/>
                            }
                        </svg>
                    </button>
                </div>

                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 ${hidden ? 'hidden' : ''} lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20`}
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link to={'/'}
                                  className="inline-block py-2 px-4 text-white font-bold no-underline">{t("home.nav-home")}</Link>
                        </li>
                        {categories.map((category, key) => (
                            <li key={key} className="mr-3 lg:mb-0 mb-4">
                                <Link className="inline-block py-2 px-4 text-white font-bold no-underline"
                                      to={`/page/${category.slug}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={getToken() ? '/dashboard/index' : '/login'} id="navAction"
                          className="mx-auto lg:mx-0 hover:underline _bg-light_gray text-white font-bold rounded mt-24 lg:mt-0 py-2 px-8 shadow opacity-75">
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
