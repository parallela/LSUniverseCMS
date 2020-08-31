/*
* Import your own language file
*
* Example:
* import langfrom "./Frontend/lang/{file}.json";
*
*/
import en from "./Frontend/lang/en.json";
import bg from "./Frontend/lang/bg.json";

/*
* Object with available frontend translations
*/
export const availableLangs = {en, bg};

/*
* Default app language
*/
export const defaultLanguage = "en";
