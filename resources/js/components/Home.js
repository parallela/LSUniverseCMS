import React from "react";
import Layout from "./Layout";
import MainImage from "./MainImage";
import Section from "./Section";
import SiteSection from "./SiteSection";
import { useTranslation } from "react-multi-lang";

const Home = props => {
    const t = useTranslation();

    return (
        <Layout>
            <MainImage />
            <Section />
            <SiteSection />
        </Layout>
    );
};
export default Home;