import React, {useState, useEffect} from "react";
import Logo from "../assets/img/logo.png";
import LoadingStrings from "../misc/LoadingStrings";

const Loading = props => {
    const [string, setString] = useState("");
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    useEffect(() => {
        setString(LoadingStrings[getRandomInt(0, LoadingStrings.length)]);
    }, [])


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
                        <p className="text-center">{string}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loading;
