import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";
import Modal from "../modals/Modal";
import AddTicketForm from "./AddTicketForm";

const UserTickets = props => {
    const t = useTranslation();

    const [data, setData] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [showTicketModal, setShowTicketModal] = useState(false);

    const columns = [
        {
            name: t("user.ticket-name"),
            cell: row => <div><Link to={`/my?page=tickets&showTicket=${row.id}`}>{row.name}</Link></div>,
            sortable: true
        },
        {
            name: t("user.ticket-status"),
            cell: row => <div>{row.status === 'open' ? 'Open' : 'Closed'}</div>,
            sortable: true
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
        }
    ]

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
        }, 5000);
    }, []);


    return (


        <div id="tickets">
            {showTicketModal &&
            <Modal title={t("user.add-ticket")} body={<AddTicketForm closeModalHandler={_closeModalHandler}/>} closeModalHandler={_closeModalHandler}/>
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
    )
}

export default UserTickets;
