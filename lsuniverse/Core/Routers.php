<?php

namespace LSUniverse\Core;

class Routers extends \Route
{
    /**
     * @return \Illuminate\Routing\Route[]
     */
    public static function getApiRoutes()
    {
        $routes = self::getRoutes()->get();
        $api_routes = [];

        for ($i = 0; $i < count($routes); $i++) {
            if (substr($routes[$i]->uri(), 0, 3) === "api") {
                $api_routes[$routes[$i]->getName()] = env('APP_URL').'/'.$routes[$i]->uri();
            }
        }

        return $api_routes;
    }
}
