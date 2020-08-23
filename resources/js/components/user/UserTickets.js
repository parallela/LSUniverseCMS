import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";
import Modal from "../modals/Modal";
import AddTicketForm from "./AddTicketForm";
import TicketPage from "./TicketPage";
import Messages from "../Messages";

const UserTickets = props => {
    let search = window.location.search;
    let params = new URLSearchParams(search);


    const ticketPage = params.get('showTicket');
    const t = useTranslation();
    const [data, setData] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState("");
    const [showTicketModal, setShowTicketModal] = useState(false);
    const columns = [
        {
            name: t("user.ticket-name"),
            cell: row => <div><Link to={`/my?page=tickets&showTicket=${row.id}`}>{row.name}</Link></div>,
        },
        {
            name: t("user.ticket-status"),
            cell: row => <div>{row.status === 'open' ? 'Open' : 'Closed'}</div>,
        },
        {
            name: t("user.ticket-last-activity"),
            selector: 'updated_at',
            sortable: true
        },
        {
            name: t("user.ticket-created"),
            selector: 'created_at',
            sortable: true
        },
        {
            name: t("user.action"),
            cell: row => <div><a href="#" onClick={e =>{_deleteTicket(e,row.id)}}>{t("user.delete")}</a></div>
        }
    ]

    const _deleteTicket = async (e,ticket_id) => {
        e.preventDefault();
        
        const rawResponse = await fetch(`/api/user/tickets/delete/${ticket_id}`, {
            method: 'POST',
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        const jsonResponse = await rawResponse.json();

        if(jsonResponse.message) {
            _getUserTickets();
        } else if(jsonResponse.error) {
            setError(jsonResponse.error);
        }

    }

    const _getUserTickets = async () => {
        const rawResponse = await fetch('/api/user/tickets', {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        setData(await rawResponse.json());
    }

    const _closeModalHandler = () => {
        setShowTicketModal(false)
    }


    useEffect(() => {
        _getUserTickets();
        setInterval(() => {
            _getUserTickets();
        }, 10000);
    }, []);


    return (
        <div id="ticket_content">
            {ticketPage !== null &&
            <div id="display-ticket">
                <TicketPage ticketID={ticketPage}/>
            </div>
            }
            <div style={{visibility: ticketPage === null ? 'visible' : 'hidden'}} id="tickets">
                {error != "" && <Messages type={"danger"} message={error}/>}
                {showTicketModal &&
                <Modal title={t("user.add-ticket")} body={<AddTicketForm closeModalHandler={_closeModalHandler}/>}
                       closeModalHandler={_closeModalHandler}/>
                }
                <div className="text-left">
                    <button className="btn btn-success  btn-outline-primary" onClick={() => setShowTicketModal(true)}>
                        {t("user.add-ticket")}
                    </button>

                </div>
                <div className="text-center">
                    <h3 className="mt-4">Tickets</h3>
                    <h5>{Object.keys(data).length}</h5>
                    <DataTable columns={columns} data={data} paginationPerPage={10}/>
                </div>
            </div>
        </div>
    )
}

export default UserTickets;
