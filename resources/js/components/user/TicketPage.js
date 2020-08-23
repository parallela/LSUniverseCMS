import React from "react";
import {useEffect, useState, useRef} from "react";
import {useTranslation} from "react-multi-lang";
import PropTypes from "prop-types";
import TicketAnswers from "./TicketAnswers";
import "../css/ticket.css";
import Messages from "../Messages";

const TicketPage = props => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [ticketReply, setTicketReply] = useState("");
    const [buttonStatus, setButtonStatus] = useState(true);
    const overflowContainerRef = useRef(null);
    const t = useTranslation();

    const _handleSubmitTicket = async (e) => {
        e.preventDefault();

        let data = {
            content: ticketReply
        }

        const rawResponse = await fetch(`/api/user/tickets/create/${props.ticketID}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
        const jsonResponse = await rawResponse.json();

        if (jsonResponse.message) {
            setTicketReply("");
            _getAnswers();
        } else if (jsonResponse.error) {
            setError(t("user.ticket-answer-problem") + ` Server message: ${jsonResponse.error}`);
            setButtonStatus(false);
            setTimeout(() => {
                setButtonStatus(true);
            }, 60000)
            _getAnswers();
        }

    }

    const scrollToBottom = () => {
        overflowContainerRef.current.scrollTop = overflowContainerRef.current.scrollHeight;
    }

    const _getAnswers = async () => {

        const rawResponse = await fetch(`/api/user/tickets/show/${props.ticketID}`, {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        setTicket(await rawResponse.json());
        setLoading(false);

        scrollToBottom();
    }
    useEffect(() => {
        _getAnswers();
    }, []);

    return (
        <div id="ticket-page" className="container-fluid">
            <div className="card mt-2 mb-2 col-md-12" id="tickets_content_display ">
                {error != "" && <Messages type={"danger"} message={error}/>}

                <h5 className="card-title mt-2">{ticket.name}  </h5>
                <h6 className="text-muted">{ticket.created_at} | {ticket.status == "open" ? t("home.open") : t("home.closed")}</h6>
                <div className="card-body">
                    <div className="overflowA" ref={overflowContainerRef}>
                        {!loading ? Object.entries(ticket.answers).map((ans, id) => <TicketAnswers key={id}
                                                                                                   answer={ans}/>) :
                            <i className="fas fa-spinner fa-pulse mb-2 mt-2"></i>}
                    </div>
                </div>
                <hr/>
                <form onSubmit={_handleSubmitTicket} className="col-md-12  " id="text-area">
                    <div className="form-group">
                        <textarea className="form-control" onChange={(e) => setTicketReply(e.target.value)}
                                  value={ticketReply} id="reply_textarea"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-outline-primary" type="submit"
                                disabled={!buttonStatus}>Reply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TicketPage;

TicketPage.propTypes = {
    ticketID: PropTypes.string.isRequired
}
