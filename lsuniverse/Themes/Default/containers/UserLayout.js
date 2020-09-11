import React, {cloneElement} from "react";
import HomeLayout from "./HomeLayout";
import Sidebar from "../components/user/Sidebar";

const UserLayout = ({children, ...props}) => {
    return (
        <div className="container mx-auto mt-6 mb-48">
            <div className="flex flex-wrap flex-col-reverse md:flex-row">
                <Sidebar/>
                {cloneElement(children, props)}
            </div>
        </div>
    );
}

export default UserLayout;
