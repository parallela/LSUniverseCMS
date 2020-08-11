import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {setTranslations, setDefaultLanguage, useTranslation} from "react-multi-lang";
import {useEffect, useState} from "react";
import en from "../lang/en.json";
import bg from "../lang/bg.json";


const Layout = ({children}) => {
    const t = useTranslation();



    useEffect(()=> {
        setTranslations({en,bg});


        const fetchData = () => {
            try {
                if(localStorage.getItem('lang') === null) {
                    localStorage.setItem('lang','en');
                }
                setDefaultLanguage(localStorage.getItem('lang'));
                // const fetchLanguages = await fetch('/api/language/available');
                // setLanguages(await fetchLanguages.json());
            } catch(e) {
                console.log(e);
            }
        }
        fetchData();

    },[])

    return (

        <div className={'site-wrap'}>
            <Navbar t={t}/>
            {children}
            <Footer t={t}/>
        </div>
    );
}
export default Layout;
