import React from "react";
import {useTranslation} from "react-multi-lang";
import UserInfo from "./user/UserInfo";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import UserBilling from "./user/UserBilling";
import UserServices from "./user/UserServices";
import UserTickets from "./user/UserTickets";

const UserCard = props => {
    const t = useTranslation();
    const h = useHistory();
    let search = window.location.search;
    let params = new URLSearchParams(search);
    const page = params.get('page');

    const isActive = (path) => {
        if (page == path) {
            return true;
        }

        return false;
    }

    const _changePage = (to_url) => {
        h.push(`/my?page=${to_url}`);
    }

    useEffect(() => {
        if (page === null || page === undefined) {
            h.push('/my?page=main');
        }
    }, [])

    return (
        <div>
            {page == "main" && <UserInfo/>}
            {page == "details" && <UserBilling/>}
            {page == "services" && <UserServices/>}
            {page == "tickets" && <UserTickets/>}
        </div>
    );
};

export default UserCard;
