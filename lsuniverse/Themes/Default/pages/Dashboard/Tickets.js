import React from "react";
import UserLayout from "../../containers/UserLayout";
import HomeLayout from "../../containers/HomeLayout";

const Tickets = props => {
    return (
        <HomeLayout>
            <UserLayout>
                <div>
                    Tickets
                </div>
            </UserLayout>
        </HomeLayout>
    );
}

export default Tickets;
