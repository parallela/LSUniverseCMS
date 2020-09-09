<?php

namespace LSUniverse\Core;

class Routers
{
    /**
     * @return \Illuminate\Routing\Route[]
     */
    public static function getApiRoutes()
    {
        $routes = \Route::getRoutes();
        $api_routes = [];
        // Loop through all of the routes
        foreach ($routes as $route) {
            // Check if its API route
            if (substr($route->uri(), 0, 3) === "api") {
                $api_routes[$route->getName()] = env('APP_URL') . '/' . $route->uri();
            }
        }
        return $api_routes;
    }
}
