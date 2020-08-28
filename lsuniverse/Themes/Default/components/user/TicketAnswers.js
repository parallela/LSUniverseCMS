import React from "react";
import PropTypes from "prop-types";
import {User} from "../../../../JSScripts/services/Authenticator";
import {useTranslation} from "react-multi-lang/lib";

const TicketAnswers = props => {
    const Auser = User();
    const {user} = props.answer[1];
    const answer = props.answer[1];
    const t = useTranslation();

    return (
        <div className="card px-2 mt-2  col-md-12 alert alert-dark">

            <div className="card-body">

                <p className="card-title">
                    {Auser.id === user.id ? t("home.you") : user.name} <br/>
                    <small className="text-muted text-right"> {answer.created_at}</small>
                </p>

                <p className="card-text">{answer.content}</p>

            </div>
        </div>
    )
}

export default TicketAnswers;

TicketAnswers.propTypes = {
    answer: PropTypes.array.isRequired
}
