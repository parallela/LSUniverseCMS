import React from "react";
import Img1 from "../assets/img/database.png";

const Heading = props => {
    const settings = window._settings;

    return (
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-24 mt-24">
            <div
                className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
                <h1 className="my-4 text-5xl font-bold leading-tight">{settings['heading-text']}</h1>
                <p className="leading-normal text-2xl mb-8">{settings['heading-text-desc']}</p>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
                <img className="w-full md:w-4/5 z-50" src={Img1}/>
            </div>

        </div>
    );
}

export default Heading;
