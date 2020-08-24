import React, { useEffect } from "react";
import { useTranslation } from "react-multi-lang";

const Verififaction = props => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    const token = params.get("token");
    const t = useTranslation();

    const VerifyUser = async () => {
        if (token === null || token === undefined) {
            localStorage.removeItem("verified");
            window.location.href='/auth';

            return false;
        }

        const rawResponse = await fetch(`/api/auth/verify/${token}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const jsonResponse = await rawResponse.json();

        if (jsonResponse.message == "Verified") {
            localStorage.setItem("verified", "verified");
            window.location.href = "/auth";

            return true;
        } else if (jsonResponse.error) {
            localStorage.setItem("verified", "not_verified");
            window.location.href = "/auth";

            return false;
        }
    };

    setTimeout(() => {
        VerifyUser();
    }, 1500);

    return <div>{t("home.please-wait")}</div>;
};

export default Verififaction;
