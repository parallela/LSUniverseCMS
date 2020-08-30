import React from "react";
import {useState, useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import {User} from "../../../../JSScripts/services/Authenticator";

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
        <div></div>
    );
};

export default UserInfo;
