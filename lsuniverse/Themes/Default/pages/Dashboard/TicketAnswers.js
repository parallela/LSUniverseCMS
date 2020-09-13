import React, {useState, useEffect, useRef} from "react";
import {useTranslation} from "react-multi-lang";
import UserLayout from "../../containers/UserLayout";
import HomeLayout from "../../containers/HomeLayout";
import {useParams} from "react-router";
import {Action_CreateTicket} from "../../../../JSScripts/reducers/actions/Action_Tickets";
import {connect, useDispatch} from "react-redux";
import Alert_Message from "../../components/alerts/Alert_Message";
import {Action_GetUserAltData} from "../../../../JSScripts/reducers/actions/Action_User";

const TicketAnswers = props => {
    const t = useTranslation();
    const [reply, setReply] = useState("");
    const [ticket, setTicket] = useState([]);
    const [errors, setErrors] = useState([]);
    const [serverError, setServerError] = useState([]);
    const dispatch = useDispatch();
    const data = {content: reply};

    const user = props.user.data
    const {id} = useParams();
    const messageDivBox = useRef(null);

    const scrollToBottom = () => {
        // Scroll into the last reply
        if (messageDivBox.current !== null) {
            messageDivBox.current.scrollTop = messageDivBox.current.scrollHeight;
        }
        return true;
    }

    useEffect(() => {
        if (!props.userAltData.loading) {
            setTicket(props.userAltData.data.tickets.filter(t => t.id === parseInt(id))[0])
        }
    }, [props.userAltData.loading]);

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const create_ticket = props.Action_CreateTicket(data, ticket.id)
            .then(res => {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                    setServerError({"server": res.statusText});
                    setTimeout(() => {
                        setServerError("");
                    }, 5000);

                    return false;
                }
                // If there's no any server errors or etc. We can continue with response as json format
                return res.json();
            });

        const res = await create_ticket;


        if (res) {
            if (res.errors) {
                setErrors(res.errors);

                // Remove errors after 5 seconds
                setTimeout(() => {
                    setErrors("");
                }, 5000)

                return false;
            }
            if (res.message) {
                setReply("");
                dispatch(Action_GetUserAltData);

                return true;
            } else {
                // The response is not the same as the api suppose to return
                throw new Error(t("app.invalid-response"));
            }

        }
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
                        {errors.length !== 0 && <Alert_Message type={"error"} data={errors}/>}
                        {serverError.length !== 0 && <Alert_Message type={"server_error"} data={serverError}/>}
                        <div className="overflow-auto h-56" ref={messageDivBox} onLoad={scrollToBottom}>
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
                                                    <p className="text-gray-900 leading-none">{user.id === ans.user_id ? user.name : (<span className="text-red-400">{ans.user.name}</span> )}</p>
                                                    <p className="text-gray-600">{ans.created_at}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr/>
                        <div className="mt-2 mb-2 lg:min-w-full text-center">
                            <textarea className="w-full text-black resize-y border rounded focus:outline-none focus:shadow-outline" onChange={e => setReply(e.target.value)} value={reply}/>
                            <button onClick={_handleSubmit}
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 mb-2 rounded-full">
                                {t("home.reply")}
                            </button>
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

export default connect(mapStateToProps, {Action_CreateTicket})(TicketAnswers);
