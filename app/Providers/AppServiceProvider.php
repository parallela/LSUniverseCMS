<?php

namespace App\Providers;

use App\Setting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;
use LSUniverse\Core\SiteCache;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton('LSUniverse\Core\SiteCache', function($app) {
            return \LSUniverse\Core\SiteCache::initSettingsCache();
        });
    }
}
