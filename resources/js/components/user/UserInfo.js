import React from "react";
import {useState, useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import {User} from "../../services/Authenticator";

const UserInfo = props => {
    const [mailAds , setMailAds] = useState("");

    const user = User();
    const userDetails = user.details;
    const t = useTranslation();

    useEffect(() => {
       if(userDetails.mailing_list != 0) {
           setMailAds(t("home.subscribed"));
       } else {
           setMailAds(t("home.unsubscribed"))
       }
    });

    return (
        <div className="text-center">
            <h5>{t("user.welcome") + user.name}</h5>
            <hr/>
            <div className="d-flex justify-content-between">
                <div className="form-group">
                    {t("user.balance")}:{" "}
                    <input
                        disabled
                        className="form-control rounded-1"
                        type="text"
                        size={Object.keys(user.balance).length}
                        value={user.balance + ' U'}
                    />
                </div>

                <div className="form-group">
                    {t("user.user-address-1")}:{" "}
                    <input
                        disabled
                        className="form-control rounded-1"
                        type="text"
                        value={userDetails.street_address_1}
                    />
                </div>

                <div className="form-group">
                    {t("user.user-address-2")}
                    <input type="text" className="form-control rounded-1" value={userDetails.street_address_2}
                           disabled/>
                </div>

                <div className="form-group">
                    {t("user.phone")}:
                    <input type="text" className="form-control rounded-1" value={userDetails.phone_number}
                           disabled/>
                </div>
            </div>
            <div className="d-flex justify-content-between">

                <div className="form-group">
                    {t("home.city")}:
                    <input type="text" className="form-control rounded-1" value={userDetails.city}
                           disabled/>
                </div>


                <div className="form-group">
                    {t("home.region")}:
                    <input type="text" className="form-control rounded-1" value={userDetails.region}
                           disabled/>
                </div>

                <div className="form-group">
                    {t("home.zipcode")}:
                    <input type="text" className="form-control rounded-1" value={userDetails.zipcode}
                           disabled/>
                </div>

                <div className="form-group">
                    {t("home.mailing_list")}:
                    <input type="text" className="form-control rounded-1" value={mailAds}
                           disabled/>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
