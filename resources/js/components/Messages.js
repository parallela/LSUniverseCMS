import React from "react";
import PropTypes from "prop-types"

const Messages = props => (
    <div className={"mt-1 mb-1 alert alert-" + props.type}>{props.message}</div>
);
export default Messages;

Messages.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
