import React from "react";
import {useTranslation} from "react-multi-lang";
import {useState, useEffect} from "react";
import DataTable from "react-data-table-component";

const UserServices = props => {
    const t = useTranslation();
    const [data, setData] = useState([]);

    const _getUserServices = async () => {
        const rawResponse = await fetch('/api/user/services', {
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
        _getUserServices();
    }, []);

    const columns = [

        {
            name: t('user.order-id'),
            selector: 'order_id',
            sortable: true,
        },

        {
            name: t('user.service-name'),
            selector: 'name',
            sortable: true
        },
        {
            name: t('user.service-price'),
            selector: 'price',
            sortable: true,
        },

        {
            name: t('user.service-purchased'),
            selector: 'created_at',
            sortable: true,
        },

        {
            name: t('user.service-expire_at'),
            selector: 'expire_at',
            sortable: true,
        },
    ]


    return (
        <div className="text-center">
            <h3 className="mt-4">{t('user.active-services')} </h3>
            <h5>{Object.keys(data).length}</h5>
            <DataTable columns={columns} data={data} pagination={true} paginationPerPage={5}/>
        </div>
    );
}
export default UserServices;
