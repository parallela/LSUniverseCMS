import React, {useEffect, useState} from "react";
import UserLayout from "../../containers/UserLayout";
import HomeLayout from "../../containers/HomeLayout";
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Tickets = props => {
    const t = useTranslation();
    const [loading, setLoading] = useState(false);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        setLoading(true);
        if (!props.userAltData.loading) {
            setLoading(false);
            setTickets(props.userAltData.data.tickets);
        }
    }, [props.userAltData.loading]);

    return (
        <HomeLayout>
            <UserLayout>
                <div className="flex-1">
                    <div
                        className="rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal">
                        <div className="font-bold text-xl mb-2 mt-2">
                            {t('user.tickets')} <br/>
                            <span
                                className="text-sm mb-4 mt-4">{t("user.ticket-amount", {ticket_number: tickets.length})}</span>
                        </div>
                        <hr/>
                        <div className="flex flex-wrap space-x-2 my-8">
                            <ul className="flex w-full flex-col p-4">
                                {loading ?
                                    <i className="fa-3x fas fa-circle-notch fa-spin"/>
                                    :
                                    tickets.map((ticket, key) => (
                                        <li className="border-gray-800 flex flex-row mb-2" key={key}>
                                            <Link to={`/dashboard/ticket/${ticket.id}`}
                                                  className="select-none cursor-pointer bg-gray-800 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                                <div
                                                    className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                                                    {ticket.status === "open" ? "🔓" : "🔐"}

                                                </div>

                                                <div className="flex-1 pl-1 mr-16">
                                                    <div className="font-medium">{ticket.name}</div>
                                                    <div
                                                        className="text-gray-600 text-sm">
                                                        {ticket.status === "open" ? t("home.open") : t("home.closed")}
                                                    </div>
                                                </div>
                                                <div className="text-gray-600 text-xs">{ticket.created_at}</div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </HomeLayout>
    );
}
const mapStateToProps = state => {
    return {
        userAltData: state.userAltData
    }
}
export default connect(mapStateToProps)(Tickets);
