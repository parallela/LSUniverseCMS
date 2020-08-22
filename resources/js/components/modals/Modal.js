import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import {useState} from "react";

const Modal = props => {

    return (
        <div className="lsU-modal" >
            <div className="lsU-modal-content alert">
                <span className="close" onClick={() => {
                    props.closeModalHandler();
                }}>&times;</span>
                <h3 className="text-left">{props.title}</h3>
                <div className="lsU-modal-body">
                    {props.body}
                </div>
            </div>
        </div>
    )


}

export default Modal;

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.any.isRequired,
    closeModalHandler: PropTypes.func.isRequired
}
