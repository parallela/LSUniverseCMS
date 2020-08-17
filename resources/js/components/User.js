import React from "react";
import { useEffect, useState } from "react";
import { UserData } from "../services/Authenticator";
import Layout from "./Layout";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard";

const User = props => {
    const user = JSON.parse(localStorage.getItem("lsU_userData"));

    if (user == null || user.error != null) {
        window.location.href = "/auth";

        return <div>Unauthorized</div>;
    }

    return (
        <div className="container mt-4 mb-4 justify-content-center ">
            <div className="row">
                <UserCard />
            </div>
        </div>
    );
};

export default User;
