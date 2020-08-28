import React from "react";
import {useState} from "react";
import {useTranslation} from "react-multi-lang";
import {updateUserCookie, User} from "../../../../JSScripts/services/Authenticator";
import Messages from "../Messages";
import {_networkUpdateUserBillingInformation} from "../../../../JSScripts/network/Network_UpdateUserBillingInformation";

const UserBilling = props => {
    const user = User();
    const userDetails = user.details;
    const t = useTranslation();
    const [address1, setAddress1] = useState(userDetails.street_address_1);
    const [address2, setAddress2] = useState(userDetails.street_address_2);
    const [phonenumber, setPhoneNumber] = useState(userDetails.phone_number);
    const [city, setCity] = useState(userDetails.city);
    const [region, setRegion] = useState(userDetails.region);
    const [zipcode, setZipcode] = useState(userDetails.zipcode);
    const [mailList, setMailList] = useState(userDetails.mailing_list);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const loaderStatus = status => {
        setLoading(status);
        setTimeout(() => {
            setError(status);
            setMessage("")
        }, 5000);
    }

    const _handleSubmit = async e => {
        e.preventDefault();

        let data = {
            'address_1': address1,
            'address_2': address2,
            'phone_number': phonenumber,
            'city': city,
            'zipcode': zipcode,
            'region': region,
            'mailing_list': mailList
        }
        const req = await _networkUpdateUserBillingInformation(data);
        loaderStatus(true);

        const jsonResponse = await req.json();

        if(req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setError(true);
            setErrorMessages(jsonResponse.errors);

            return false;
        }

        updateUserCookie();
        setTimeout(() => {
            loaderStatus(false)
        }, 3000)
        setMessage(t("user.success-updated"));

    }

    return (
        <div className="text-center">
            {error &&
            Object.entries(errorMessages).map((value, key) => (
                    <Messages key={key} type={"danger"} message={value[1].toString()}/>
                )
            )}
            {message !== "" && <Messages type={"success"} message={message}/>}

            <form className="row" onSubmit={_handleSubmit}>
                <div className="form-group col-md-6">
                    <label htmlFor="address-1">{t("user.user-address-1")}</label>
                    <input onChange={e => {
                        setAddress1(e.target.value)
                    }} type="text" className="form-control" required id="address-1"
                           value={address1}/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="address-2">{t("user.user-address-2")}</label>
                    <input onChange={e => {
                        setAddress2(e.target.value)
                    }} type="text" className="form-control" required id="address-2"
                           value={address2}/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="phone_number">{t("user.phone")}</label>
                    <input onChange={e => {
                        setPhoneNumber(e.target.value)
                    }} type="text" className="form-control" required id="phone_number"
                           value={phonenumber}/>
                </div>


                <div className="form-group col-md-6">
                    <label htmlFor="city">{t("home.city")}</label>
                    <input onChange={e => setCity(e.target.value)} type="text" className="form-control" required
                           id="city"
                           value={city}/>
                </div>


                <div className="form-group col-md-6">
                    <label htmlFor="region">{t("home.region")}</label>
                    <input onChange={e => setRegion(e.target.value)} type="text" className="form-control" required
                           id="region"
                           value={region}/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="zipcode">{t("home.zipcode")}</label>
                    <input onChange={e => setZipcode(e.target.value)} type="text" className="form-control" required
                           id="zipcode"
                           value={zipcode}/>
                </div>


                <div className="form-group col-md-6">
                    <label htmlFor="mailing">{t("home.mailing_list")}</label>
                    <select id="mailing" value={mailList} onChange={e => setMailList(e.target.value)}
                            className="form-control">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>

                <div className="form-group col-md-12">
                    <button type="submit"
                            className="btn btn-primary btn-outline-default"
                            disabled={loading}>{t("home.submit")}</button>
                </div>
            </form>
        </div>
    )
}
export default UserBilling;
