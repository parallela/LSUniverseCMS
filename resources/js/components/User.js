import React from "react";
import UserCard from "./UserCard";
import {User as UD} from "../services/Authenticator";

const User = props => {
    const user = UD();

    if (localStorage.getItem('token') === null) {
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
