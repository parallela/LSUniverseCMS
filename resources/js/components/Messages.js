import React from "react";
import PropTypes from "prop-types"

const Messages = props => (
    <div className={"alert alert-" + props.type}>{props.message}</div>
);
export default Messages;

Messages.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
