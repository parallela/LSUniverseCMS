import React from "react";
import {useTranslation} from "react-multi-lang";
import UserInfo from "./user/UserInfo";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import UserBilling from "./user/UserBilling";

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
        <div className="col-md-12">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className={isActive("main") ? "nav-link active" : "nav-link"} onClick={() => {_changePage("main")}}>
                                {t("user.user-info")}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={isActive("details") ? "nav-link active" : "nav-link"} onClick={() => {_changePage("details")}}>
                                {t('user.user-billing-details')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={isActive("services") ? "nav-link active": "nav-link"} href="#">
                                {t('user.active-services')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={isActive("tickets") ? "nav-link active": "nav-link"} href="#">
                                {t('user.tickets')}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={isActive('invoices') ? "nav-link active": "nav-link"} href="#">
                                {t('user.invoices')}
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="card-body">
                        {page == "main" && <UserInfo/>}
                        {page == "details" && <UserBilling/>}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
