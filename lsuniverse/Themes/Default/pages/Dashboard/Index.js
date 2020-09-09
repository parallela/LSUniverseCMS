import React, {useEffect, useState} from "react";
import HomeLayout from "../../containers/HomeLayout";
import {useTranslation} from "react-multi-lang";
import {connect, useDispatch} from "react-redux"
import Sidebar from "../../components/user/Sidebar";
import Main from "../../components/user/Main";
import {Action_GetUserAltData} from "../../../../JSScripts/reducers/actions/Action_User";

const Index = props => {
    const t = useTranslation()
    const dispatch = useDispatch();


    const userData = props.user.data;
    const userAltData = props.userAltData.data;
    const [ticketsCounter, setTicketsCounter] = useState(0);
    const [servicesCounter, setServicesCounter] = useState(0);
    const [invoicesCounter, setInvoicesCounter] = useState(0);


    useEffect(() => {
        if (!props.userAltData.loading) {
            setTicketsCounter(userAltData.tickets.length);
            setServicesCounter(userAltData.services.length);
        } else {
            dispatch(Action_GetUserAltData);
        }
    }, [props.userAltData.loading]);

    return (
        <HomeLayout>
            <div className="container mx-auto mt-6 mb-48">
                <div className="flex flex-wrap flex-col-reverse md:flex-row">
                    <Sidebar/>
                    <Main userData={userData} userCounters={{tickets: ticketsCounter, services: servicesCounter}}/>
                </div>

            </div>
        </HomeLayout>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userAltData: state.userAltData,
    }
}

export default connect(mapStateToProps)(Index);
