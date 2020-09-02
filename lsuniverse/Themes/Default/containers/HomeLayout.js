import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SVGSepartor from "../components/SVGSeprator";
import SVGSepartor2 from "../components/SVGSepartor2";

const HomeLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="pt-24">
                {children}
            </div>

            <Footer/>
        </>
    )
}

export default HomeLayout;
