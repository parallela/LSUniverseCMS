<?php

namespace App\Addons\ExampleAddon;

use App\Addons\LSUniverseAddon;


class Core implements LSUniverseAddon {

    private $configArray = null;

    public function config()
    {
        $this->configArray = include('../example-addon/config/config.php'); 
    }

    public function onExpire()
    {
        return 'exampleOnExpire'        
    }

    public function onSuccess()
    {
        return 'exampleOnSuccess';
    }

    public function activate()
    {
        // Register to database;
        // Example Code: 
        // LSUniverseCMS::registerPlugin([
        // 'addon_name' => 'Example-Addon'
        // 'addon_full_className' => 'App\Addon\ExampleAddon\Core'  
        // ]);
        return 'plugin_activation'
    }

    public function addonInfo()
    {
        
    }

}