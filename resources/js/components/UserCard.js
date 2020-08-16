import React from "react";
import Layout from "./Layout";

const UserCard = props => {
    return (
        <div className="col-md-12">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                
                </div>
            </div>
        </div>
    );
};

export default UserCard;
