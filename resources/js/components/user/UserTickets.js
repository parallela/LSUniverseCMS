import React from "react";
import {useEffect, useState} from "react";
import {useTranslation} from "react-multi-lang";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";

const UserTickets = props => {
    const t = useTranslation();

    const [data, setData] = useState([]);


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

    useEffect(() => {
        _getUserTickets();
    }, []);

    return (
        <div className="text-center">

            <h3 className="mt-4">Tickets</h3>
            <h5>{Object.keys(data).length}</h5>
            <DataTable columns={columns} data={data} paginationPerPage={10}/>

        </div>
    )
}

export default UserTickets;
