import React from "react";
import {useTranslation} from "react-multi-lang";
import {Link, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

const Main = props => {
    const t = useTranslation();
    const userData = props.userData;
    const counters = props.userCounters;
    const userAltData = props.userAltData;

    const Logout = () => {
        localStorage.removeItem('auth_token')
        window.location.href = window._env.GLOBAL_URL;
    }

    return (
        <div className="flex-1">
            <div
                className="rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal">
                <div className="font-bold text-xl mb-2 mt-2">{t("user.welcome")} {userData.name} </div>
                <span className="text-sm mb-4"><a onClick={Logout} href={"#"}>{t("auth.logout")}</a></span>
                <hr/>
                <div className="flex flex-wrap justify-between my-8">
                    <div className="flex flex-wrap w-1/2 md:w-1/3 px-2">
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <div
                                className="rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                                </svg>
                            </div>
                            <div className="px-2">
                                <span
                                    className="text-gray-700 font-bold">{counters.services} {t('user.active-services')}</span>
                                <span className="text-gray-700 text-sm block">{t('home.click-to-open')}.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2 md:w-1/3 px-2">
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <div
                                className="rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <div className="px-2">
                                <span
                                    className="text-gray-700 font-bold">{counters.tickets} {t('user.open-tickets')} </span>
                                <span className="text-gray-700 text-sm block">{t('home.click-to-open')}.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full mt-2 md:mt-0 md:w-1/3 px-2">
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <div
                                className="rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                                </svg>
                            </div>
                            <div className="px-2">
                                <span className="text-gray-700 font-bold">TODO {t('user.invoices')}</span>
                                <span className="text-gray-700 text-sm block">{t('home.click-to-open')}.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap w-full md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">{t('home.recent')} {t('user.active-services')}</div>
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <ul className="text-gray-700 text-sm w-full">
                                {userAltData.services.length === 0 ? (<li>No active services</li>) : null}
                                {userAltData.services.map((service, key) => (
                                    <li key={key} className="my-2 border-b-2 ">
                                        <Link to={`/dashboard/services/${service.id}`}>>
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col w-full md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">{t('home.recent')} {t('user.tickets')}</div>
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <ul className="text-gray-700 text-sm w-full">
                                {userAltData.tickets.length === 0 ? (<li>No recent tickets</li>) : null}
                                {/*TODO: wrap that in link tag */}
                                {userAltData.tickets.map((ticket, key) => (
                                    <li key={key} className="my-2 border-b-2 "><Link
                                        to={`/dashboard/tickets/${ticket.id}`}>{ticket.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full flex-col md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">{t('home.recent')} {t('user.invoices')}</div>
                        <div className="flex flex-wrap w-full rounded bg-white shadow-md p-2">
                            <ul className="text-gray-700 text-sm w-full">
                                <li className="my-2 border-b-2 ">Lorem, ipsum dolor.</li>
                                <li className="my-2 border-b-2 ">Lorem, ipsum dolor.</li>
                                <li className="my-2 border-b-2 ">Lorem, ipsum dolor.</li>
                                <li className="my-2 border-b-2 ">Lorem, ipsum dolor.</li>
                                <li className="my-2">Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main;

Main.propTypes = {
    userData: PropTypes.any.isRequired,
    userCounters: PropTypes.any.isRequired,
    userAltData: PropTypes.any.isRequired
}
