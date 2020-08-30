import React from "react";
import {useEffect, useState, useRef} from "react";
import {useTranslation} from "react-multi-lang";
import PropTypes from "prop-types";
import TicketAnswers from "./TicketAnswers";
import "../css/ticket.css";
import Messages from "../Messages";
import {_networkCreateTicketAnswer} from "../../../../JSScripts/network/Network_CreateTicket";
import {_networkGetTicketAnswers} from "../../../../JSScripts/network/Network_GetTicketAnswers";

const TicketPage = props => {
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [ticketReply, setTicketReply] = useState("");
    const [buttonStatus, setButtonStatus] = useState(true);
    const overflowContainerRef = useRef(null);
    const t = useTranslation();

    const _handleSubmitTicket = async (e) => {
        e.preventDefault();

        let data = {
            content: ticketReply
        }

        const req = _networkCreateTicketAnswer(data);
        const jsonResponse = await req.json();

        if (req.status === 500) {
            return false;
        }

        if (req.status !== 200 && req.status !== 201) {
            setError(true);
            setErrorMessages(jsonResponse.errors);
            setButtonStatus(false);
            setTimeout(() => {
                setButtonStatus(true);
            }, 60000)
            _getAnswers();

            return false;
        }

        setTicketReply("");
        _getAnswers();

    }

    const scrollToBottom = () => {
        overflowContainerRef.current.scrollTop = overflowContainerRef.current.scrollHeight;
    }

    const _getAnswers = async () => {

        const req = await _networkGetTicketAnswers(props.ticketID)
        setTicket(await req.json());
        setLoading(false);

        scrollToBottom();
    }
    useEffect(() => {
        _getAnswers();
    }, []);

    return (
        <div id="ticket-page">
            {error &&
            Object.entries(errorMessages).map((value, key) => (
                    <Messages key={key} type={"danger"} message={value[1].toString()}/>
                )
            )}
        </div>
    )
}
export default TicketPage;

TicketPage.propTypes = {
    ticketID: PropTypes.string.isRequired
}
