import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import PropTypes from "prop-types";
import TicketAnswers from "./TicketAnswers";
import "../css/ticket.css";

const TicketPage = props => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);
    const t = useTranslation();


    useEffect(() => {
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
        }
        _getAnswers();

        setInterval(() => {
            _getAnswers()
        }, 5000);
    }, []);

    return (
        <div id="ticket-page" className="container-fluid">
            <div className="card mt-2 mb-2 col-md-12" id="tickets_content_display ">
                <h5 className="card-title mt-2">{ticket.name}</h5>
                <h6 className="text-muted">{ticket.created_at} | {ticket.status == "open" ? t("home.open") : t("home.closed")}</h6>
                <div className="card-body">
                    <div className="overflowA">
                        {!loading ? Object.entries(ticket.answers).map((ans, id) => <TicketAnswers key={id}
                                                                                                   answer={ans}/>) :
                            <i className="fas fa-spinner fa-pulse mb-2 mt-2"></i>}
                    </div>
                </div>
                <hr/>
                <div className="col-md-12  " id="text-area">
                    <div className="form-group">
                        <textarea className="form-control" id="reply_textarea"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-outline-primary" type="submit">Reply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TicketPage;

TicketPage.propTypes = {
    ticketID: PropTypes.string.isRequired
}
