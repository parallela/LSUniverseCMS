import React, {useState, useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import HomeLayout from "../containers/HomeLayout";

const VerifyUser = props => {
    const token = new URLSearchParams(window.location.search).get('token');
    const [valid, setValid] = useState(false);
    const t = useTranslation();
    const request = async () => {
        const req = await fetch(`/api/auth/verify/${token}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            // There's server error here.
            if (res.status === 500 || res.status >= 511) {
                setValid(false);
                return false;
            }
            // If there's no any server errors or etc. We can continue with response as json format
            return res.json();
        }).then(res => {
           res.message === "verified" ? setValid(true) : setValid(false);
        });
    }


    useEffect(() => {
        request()
    }, [token]);

    return (
        <HomeLayout>
            <div className="container mx-auto text-center pt-24 mt-6 mb-48">
                <div className="flex flex-wrap flex-col-reverse md:flex-row">
                    <div className="flex-1">
                        <div
                            className="rounded overflow-hidden shadow-lg p-4 text-center flex flex-col justify-between leading-normal">
                            <div
                                className="font-bold text-xl mb-2 mt-2">{valid ? t('auth.account-verified') : t('auth.account-verification-failed')}</div>
                        </div>
                    </div>
                </div>

            </div>

        </HomeLayout>
    );


}

export default VerifyUser;
