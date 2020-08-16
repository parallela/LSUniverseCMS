import React from "react";
import { useEffect, useState } from "react";
import { UserData } from "../services/Authenticator";
import Layout from "./Layout";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard";

const User = props => {
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem("lsU_userData"));

    if(user.error) {
        localStorage.removeItem('lsU_userData');
        localStorage.removeItem('token');

        history.push('/auth');
    }

    return (
        <Layout>
            <div className="container mt-4 mb-4 justify-content-center ">
                <div className="row">
                    <UserCard />
                </div>
            </div>
        </Layout>
    );
};

export default User;
