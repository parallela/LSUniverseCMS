import React from "react";
import HomeLayout from "../../containers/HomeLayout";
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux"
import Sidebar from "../../components/user/Sidebar";
import Main from "../../components/user/Main";

const Index = props => {
    const t = useTranslation()
    const userData = props.user.data;

    return (
        <HomeLayout>
            <div className="container mx-auto mt-6 mb-48">
                <div className="flex flex-wrap flex-col-reverse md:flex-row">
                    <Sidebar/>
                    <Main userData={userData}/>
                </div>

            </div>
        </HomeLayout>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Index);

