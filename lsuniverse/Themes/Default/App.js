import React, {useState, useMemo, useEffect} from "react";
import Home from "./pages/Home";
import {useTranslation} from "react-multi-lang";

const App = () => {
    const t = useTranslation();


    return (
        <div>
            <Home/>
        </div>
    );
};

export default App;

