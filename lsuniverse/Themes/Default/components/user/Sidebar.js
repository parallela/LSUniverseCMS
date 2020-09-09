import React from "react";
import {useTranslation} from "react-multi-lang";

const Sidebar = props => {
    const t = useTranslation();

    return (
        <div className="flex flex-wrap w-full md:w-1/4">
            <div className="w-full">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 mt-2">{t('home.quick-menu')}</div>
                        <hr/>
                        <div className="mt-2">
                            {/*TODO : NAVIGATION WITH LINKS */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Sidebar;
