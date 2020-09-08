import React from "react";
import {useTranslation} from "react-multi-lang";

const Main = props => {
    const t = useTranslation();
    const userData = props.userData;

    return (
        <div className="flex-1">
            <div
                className="rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal">
                <div className="font-bold text-xl mb-2 mt-2">{t("user.welcome")} {userData.name}</div>
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
                                <span className="text-gray-700 font-bold">2 Active Services.</span>
                                <span className="text-gray-700 text-sm block">1 expiring soon.</span>
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
                                <span className="text-gray-700 font-bold">1 Open ticket.</span>
                                <span className="text-gray-700 text-sm block">Click to open.</span>
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
                                <span className="text-gray-700 font-bold">1 Open ticket.</span>
                                <span className="text-gray-700 text-sm block">Click to open.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">Recent Invoices</div>
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
                    <div className="flex flex-wrap w-full md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">Recent Tickets</div>
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
                    <div className="flex flex-wrap w-full md:w-1/3 px-2">
                        <div className="w-full font-bold my-4">Recent Invoices</div>
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
