<?php

namespace LSUniverse\Core;

use App\Setting;
use Illuminate\Support\Facades\Cache;

class SiteCache
{
    /**
     * @return bool
     */
    static public function initSettingsCache()
    {
        Cache::remember('settings', now()->addMinutes(30), function () {
            $settings = Setting::all()->toArray();
            $s = [];

            foreach ($settings as $k => $v) {
                $s[$v['key']] = $v['value'];
            }

            return $s;
        });

        return true;
    }

    /**
     * @return bool
     */
    static public function initRoutersCache()
    {
        Cache::remember('api_routes', now()->addHour(1), function () {
            $routes = Routers::getApiRoutes();


            return $routes;
        });


        return true;
    }
}
