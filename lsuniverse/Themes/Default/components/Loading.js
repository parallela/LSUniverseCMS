import React from "react";
import Logo from "../assets/img/logo.png";
import {useTranslation} from "react-multi-lang";

const Loading = props => {

    return (
        <>
            <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8">
                <div className="max-w-xs w-full">
                    <div>
                        <img className="mx-auto h-24 w-auto"
                             src={Logo} alt="Workflow"/>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            <i className="fa-3x fas fa-circle-notch fa-spin"></i>

                        </h2>
                        <p className="text-center">Loading...</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loading;
