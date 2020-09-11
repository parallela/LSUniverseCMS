import React from "react";
import {useTranslation} from "react-multi-lang";
import DashboardRoutes from "../../routes/dashboard";
import {Link} from "react-router-dom";

const Sidebar = props => {
    const t = useTranslation();

    const isActive = path => {
        const currentPath = window.location.pathname;
        if (currentPath === path) {
            return "bg-gray-800 hover:bg-gray-900";
        }
        return "";
    }

    return (
        <div className="flex flex-wrap w-full md:w-1/4">
            <div className="w-full">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 mt-2">{t('home.quick-menu')}</div>
                        <hr/>
                        <div className="mt-2">
                            <ul className="flex-row space-y-2">
                                {DashboardRoutes.map((route, key) => (
                                    <li className="flex-1 mr-2" key={key}>
                                        <Link to={`/dashboard${route.path}`}
                                              className={`text-center block border border-gray-800 ${isActive(`/dashboard${route.path}`)} rounded py-2 px-4 text-white`}>
                                            {route.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Sidebar;
