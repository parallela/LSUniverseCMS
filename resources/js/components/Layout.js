import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    setTranslations,
    setDefaultLanguage,
    useTranslation
} from "react-multi-lang";
import { UserData } from "../services/Authenticator";
import { useEffect, useState } from "react";
import en from "../lang/en.json";
import bg from "../lang/bg.json";

const Layout = ({ children }) => {


    return (
        <div className={"site-wrap"}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
export default Layout;
