import React from 'react';
import Layout from "./Layout";
import MainImage from "./MainImage";
import Section from "./Section";
import SiteSection from "./SiteSection";
import {setTranslations, setDefaultLanguage, useTranslation} from "react-multi-lang";
import {useEffect, useState} from "react";


const Home = props => {
    const t = useTranslation();

    useEffect(() => {
    }, [])

    return (
        <Layout>
            <MainImage t={t}/>
            <Section t={t}/>
            <SiteSection t={t}/>
        </Layout>
    )
}
export default Home;
