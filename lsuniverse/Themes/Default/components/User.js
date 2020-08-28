import React from "react";
import UserCard from "./UserCard";
import {User as UD} from "../../../JSScripts/services/Authenticator";

const User = props => {
    const user = UD();

    if (localStorage.getItem('token') === null) {
        window.location.href = "/auth";

        return <div>Unauthorized</div>;
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <UserCard />
            </div>
        </div>
    );
};

export default User;
