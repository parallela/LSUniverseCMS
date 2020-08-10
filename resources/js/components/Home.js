import React from 'react';
import Layout from "./Layout";
import MainImage from "./MainImage";
import Section from "./Section";
import SiteSection from "./SiteSection";

const Home = props => {
    return (
        <Layout>
            <MainImage />
            <Section />
            <SiteSection />
        </Layout>
    )
}
export default Home;
