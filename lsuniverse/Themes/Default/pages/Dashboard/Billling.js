import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import HomeLayout from "../../containers/HomeLayout";
import UserLayout from "../../containers/UserLayout";
import {useTranslation} from "react-multi-lang";

const Billing = props => {
    const [loading, setLoading] = useState(true);

    // Inputs
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [mailinglist, setMailingList] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityQuestionAns, setSecurityQuestionAns] = useState("");


    const t = useTranslation();

    useEffect(() => {
        if (!props.user.loading) {
            setLoading(false);
            const details = props.user.data.details;

            setAddress1(details.street_address_1);
            setAddress2(details.street_address_2);
            setPhone(details.phone_number);
            setCity(details.city);
            setRegion(details.region);
            setZipCode(details.zipcode);
            setMailingList(details.mailing_list);
            setSecurityQuestion(details.security_question);
            setSecurityQuestionAns(details.security_question_answer);
        }
    }, [props.user.loading])

    return (
        <HomeLayout>
            <UserLayout>
                <div className="flex-1">
                    <div
                        className="rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal">
                        <div className="font-bold text-xl mb-2 mt-2">
                            {t('user.user-billing-details')} <br/>
                        </div>
                        <hr/>
                        {!loading &&
                        <div className="flex flex-wrap space-x-2 my-8">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.user-address-1")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail1" type="text" placeholder="" value={address1}
                                        onChange={e => setAddress1(e.target.value)}/>
                                </div>

                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.user-address-2")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail2" type="text" placeholder="" value={address2}
                                        onChange={e => setAddress2(e.target.value)}/>
                                </div>

                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.city")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail3" type="text" placeholder="" value={city}
                                        onChange={e => setCity(e.target.value)}/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.phone")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail4" type="text" placeholder="" value={phone}
                                        onChange={e => setPhone(e.target.value)}/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.region")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail5" type="text" placeholder="" value={region}
                                        onChange={e => setRegion(e.target.value)}/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.zipcode")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail6" type="text" placeholder="" value={zipcode}
                                        onChange={e => setZipCode(e.target.value)}/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.security-question")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail7" type="text" placeholder="" value={securityQuestion}
                                        onChange={e => setSecurityQuestion(e.target.value)}/>
                                </div>
                                {/*TODO: Forget password with security questions */}
                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.security-question-answer")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail7" type="text" placeholder="" value={securityQuestionAns}
                                        onChange={e => setSecurityQuestionAns(e.target.value)}/>
                                </div>

                            </div>
                        </div>
                        }
                    </div>
                </div>
            </UserLayout>
        </HomeLayout>
    );

}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps)(Billing);
