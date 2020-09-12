import React, {useState, useEffect, useRef} from "react";
import {useTranslation} from "react-multi-lang";
import UserLayout from "../../containers/UserLayout";
import HomeLayout from "../../containers/HomeLayout";
import {useParams} from "react-router";
import {connect} from "react-redux";

const TicketAnswers = props => {
    const messageDivBox = useRef();
    const t = useTranslation();
    const [reply, setReply] = useState("");
    const [ticket, setTicket] = useState([]);

    const user = props.user.data
    const {id} = useParams();

    useEffect(() => {
        if (!props.userAltData.loading) {
            setTicket(props.userAltData.data.tickets.filter(t => t.id === parseInt(id))[0])
        }
        // Scroll into the last reply
        if (messageDivBox.current !== undefined) {
            messageDivBox.current.scrollIntoView({behavior: "smooth"});
        }
    }, [props.userAltData.loading, messageDivBox.current]);

    const _handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <HomeLayout>

            <UserLayout>
                <div className="flex-1">
                    <div
                        className="rounded  shadow-lg p-4 flex flex-col justify-between leading-normal">
                        <div className="font-bold text-xl mb-2 mt-2">
                            {t('user.ticket-answers')}: {ticket.name} <br/>
                        </div>
                        <hr/>
                        <div className="overflow-auto h-56" ref={messageDivBox}>
                            {(ticket.answers === undefined || ticket.answers.length === 0) ? (t("user.no-ticket-replies")) : ticket.answers.map((ans, key) => (
                                <div className="flex flex-wrap space-x-2 my-2" key={key}>
                                    <div className="max-w-full w-full lg:max-w-full">
                                        <div
                                            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8">
                                                <p className="text-gray-700 text-base">
                                                    {ans.content}
                                                </p>
                                            </div>
                                            <hr/>
                                            <div className="flex mb-2 mt-4">
                                                <img className="w-10 h-10 rounded-full mr-4"
                                                     src={`https://www.gravatar.com/avatar/${user.email}`}
                                                     alt={`Avatar of ${user.name}`}/>
                                                <div className="text-sm">
                                                    <p className="text-gray-900 leading-none">{user.id === ans.user_id ? user.name : ans.user.name}</p>
                                                    <p className="text-gray-600">{ans.created_at}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr/>
                        <div className="mt-2 mb-2 lg:min-w-full">
                            <textarea className="w-full text-black" onChange={e => setReply(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </HomeLayout>
    )

}

const mapStateToProps = state => {
    return {
        user: state.user,
        userAltData: state.userAltData
    }
}

export default connect(mapStateToProps)(TicketAnswers);
