import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import HomeLayout from "../../containers/HomeLayout";
import UserLayout from "../../containers/UserLayout";
import {useTranslation} from "react-multi-lang";

const Billing = props => {
    const [loading, setLoading] = useState(false);
    const user = props.user.data;
    const details = props.user.data.details;

    const t = useTranslation();

    // Dont needed in the moment
    // useEffect(() => {
    // }, [])

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
                                        id="detail1" type="text" placeholder=""/>
                                </div>

                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.user-address-2")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail2" type="text" placeholder=""/>
                                </div>

                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.city")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail3" type="text" placeholder=""/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("user.phone")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail4" type="text" placeholder=""/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.region")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail5" type="text" placeholder=""/>
                                </div>


                                <div className="w-full md:w-64 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        {t("home.zipcode")}
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="detail6" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
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
