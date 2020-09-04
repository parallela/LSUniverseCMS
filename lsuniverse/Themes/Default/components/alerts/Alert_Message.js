import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import "animate.css/animate.min.css";

const Alert_Message = props => {
    const [errorClassType, setErrorClassType] = useState("");

    useEffect(() => {
        switch (props.type) {
            case "error":
                setErrorClassType("bg-red-100 border-red-500 text-red-700");
                break;
            case "server_error":
                setErrorClassType("bg-red-100 border-red-800 text-red-600");
                break;
            case "success":
                setErrorClassType("bg-green-100 border-green-500 text-green-700");
                break;
            case "warning":
                setErrorClassType("bg-orange-100 border-orange-500 text-orange-700");
                break;
        }
    }, [])


    return (
        <div className="animate__animated animate__headShake">
            <div className={`border-l-4 p-4 ${errorClassType}`} role="alert">
                <ul className="list-disc px-4">
                    {Object.entries(props.data).map((msg, key) => {
                        return (<li key={key}>{msg[1]}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Alert_Message;

Alert_Message.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}
