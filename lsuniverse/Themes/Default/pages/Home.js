import React, {useContext} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import HomeLayout from "../containers/HomeLayout";
import Heading from "../components/Heading";
import Section1 from "../components/Section1";
import SVGSepartor from "../components/SVGSeprator";
import SVGSepartor2 from "../components/SVGSepartor2";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Home = props => {
    return (
        <HomeLayout>
            <Heading/>
            <SVGSepartor/>
            <Section1/>
            <Section2/>
            <Section3/>
            <SVGSepartor2 />
        </HomeLayout>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);
