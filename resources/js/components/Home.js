import React from 'react';
import Layout from "./Layout";
import MainImage from "./MainImage";
import Section from "./Section";
import SiteSection from "./SiteSection";
import {setTranslations, setDefaultLanguage, useTranslation} from "react-multi-lang";


const Home = props => {
    const t = useTranslation();


    return (
        <Layout>
            <MainImage t={t}/>
            <Section t={t}/>
            <SiteSection t={t}/>
        </Layout>
    )
}
export default Home;
