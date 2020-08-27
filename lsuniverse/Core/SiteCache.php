<?php

namespace LSUniverse\Core;

use App\Setting;
use Illuminate\Support\Facades\Cache;

class SiteCache
{
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
}
