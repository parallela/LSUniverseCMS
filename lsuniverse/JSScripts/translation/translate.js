import {setTranslations, setDefaultLanguage, useTranslation} from "react-multi-lang";
import {availableLangs} from "../../Language/config";
import {defaultLanguage} from "../../Language/config";

export function initTranslator() {
    setTranslations(availableLangs);


    /*
    * Checking if the user has selected their own language
    */
    if (localStorage.getItem('language')) {
        setDefaultLanguage(localStorage.getItem('language'));
    } else {
        setDefaultLanguage(defaultLanguage);
    }

}

export function translator() {
    /*
    * Init translator
    */
    initTranslator();

    return useTranslation();
}


