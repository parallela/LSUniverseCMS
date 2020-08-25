import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import Select from "react-select";
import PropTypes from "prop-types";
import Messages from "../Messages";

const AddTicketForm = props => {
    const [departments, setDepartments] = useState([]);
    const [topic, setTopic] = useState("");
    const [topicDesc, setTopicDesc] = useState("");
    const [topicDep, setTopicDep] = useState("");
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(true);
    const t = useTranslation();
    const prepareOptions = [];

    const _getDepartments = async () => {
        const rawResponse = await fetch('/api/departments/list', {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const jsonResponse = await rawResponse.json()

        jsonResponse.map((dep) => prepareOptions.push({value: dep.id, label: dep.name}))
        setLoading(false);
    }

    const loaderStatus = status => {
        setTimeout(() => {
            setLoading(status);
        }, 3000);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            name: topic,
            content: topicDesc,
            department: topicDep
        }

        const rawResponse = await fetch('/api/user/tickets/create', {
            method: 'POST',
            headers: {
                'Accept': 'applicaiton/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });


        const jsonResponse = await rawResponse.json();
        setLoading(true);

        if(rawResponse.status === 500) {
            return false;
        }

        if (rawResponse.status !== 200 && rawResponse.status !== 201) {
            setError(true);
            setErrorMessages(jsonResponse.errors);

            return false;
        }

        setMessage(t("user.ticket-pending"));
        setError(false);
        props.closeModalHandler();

        loaderStatus(false);
    }

    useEffect(() => {
        _getDepartments();
        setDepartments(prepareOptions);
    }, []);

    return (
        <div id="ticket-form">
            <form className="row" onSubmit={_handleSubmit}>
                <div className="col-md-12">
                    {error &&
                    Object.entries(errorMessages).map((value, key) => (
                            <Messages key={key} type={"danger"} message={value[1].toString()}/>
                        )
                    )}
                    {message !== "" && <Messages type={"success"} message={message}/>}
                </div>
                <div className="col-md-6 text-center">
                    <div className="form-group">
                        <label htmlFor="topic">{t("user.ticket-topic")}</label>
                        <input type="text" onChange={e => setTopic(e.target.value)} className="form-control" id="topic"
                               name="topic" value={topic} required/>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="for-department">{t("user.department")}</label>
                        <Select onChange={opt => setTopicDep(opt.value)} options={departments}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="desc">{t('user.topic-description')}</label>
                        <textarea id="desc" onChange={e => setTopicDesc(e.target.value)} value={topicDesc}
                                  className="form-control" required></textarea>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <button className="btn btn-success btn-outline-primary" type="submit"
                            disabled={loading}>{t("home.submit")}</button>
                </div>
            </form>
        </div>
    );
}
export default AddTicketForm;

AddTicketForm.propTypes = {
    closeModalHandler: PropTypes.func.isRequired
}
