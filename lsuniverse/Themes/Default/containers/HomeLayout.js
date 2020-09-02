import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SVGSepartor from "../components/SVGSeprator";
import SVGSepartor2 from "../components/SVGSepartor2";
import Loading from "../components/Loading";

const HomeLayout = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 1500)
    });
    return !loading ? (
        <>
            <Navbar/>
            <div className="pt-24">
                {children}
            </div>

            <Footer/>
        </>
    ) : (
        <Loading/>
    );
}

export default HomeLayout;
