import React from "react";
import { useEffect, useState } from "react";
import { UserData } from "../services/Authenticator";
import Layout from "./Layout";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard";

const User = props => {
    let history = useHistory();
    const [user, setUser] = useState([]);
    const setUserData = async () => {
        setUser(await UserData());
    };
    useEffect(() => {
        setUserData();
    }, []);

    if (user.error) {
        history.push("/auth");
        return false;
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
