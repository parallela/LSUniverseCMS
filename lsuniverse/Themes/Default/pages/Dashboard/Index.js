import React, {useEffect, useState} from "react";
import HomeLayout from "../../containers/HomeLayout";
import {useTranslation} from "react-multi-lang";
import {connect, useDispatch} from "react-redux"
import Sidebar from "../../components/user/Sidebar";
import Main from "../../components/user/Main";
import {Action_GetUserAltData} from "../../../../JSScripts/reducers/actions/Action_User";
import UserLayout from "../../containers/UserLayout";

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
            <UserLayout>
                <Main userAltData={userAltData} userData={userData}
                      userCounters={{tickets: ticketsCounter, services: servicesCounter}}/>
            </UserLayout>
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
