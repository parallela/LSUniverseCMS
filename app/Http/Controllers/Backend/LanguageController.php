<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    /**
     * @param $jsonFile
     * @return array|mixed
     */
    private function getLanguageFile($jsonFile)
    {
        $readFile = null;
        $fileContent = null;

        $pathConstruct = public_path('lang/' . $jsonFile);
        try {
            $fileContent = file_get_contents($pathConstruct);
        } catch (\Exception $exception) {
            return response()->json(['Can\'t find the language file'], 404);
        }
        $readFile = json_decode($fileContent);

        return $readFile;
    }

    /**
     * @param $lang
     * @return \Illuminate\Http\JsonResponse
     */
    public function change($lang)
    {
        if ($lang == "en") {
            return response()->json($this->getLanguageFile($lang . '.json'), 200);
        } // TODO: Implementing other languages;
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function availableTranslations()
    {
        $availableLanguages = [];
        $dir = public_path(DIRECTORY_SEPARATOR . 'lang' . DIRECTORY_SEPARATOR);
        chdir($dir);
        $files = glob("*.json");

        foreach ($files as $file) {
            array_push($availableLanguages, explode('.',$file)[0]);
        }

        return response()->json($availableLanguages, 200);
    }
}
