<?php

namespace LSUniverse\Addons\ExampleAddon;

use LSUniverse\iLSUniverseAddon;

class Main implements iLSUniverseAddon {

    public function onSuccess(array $params)
    {
        // TODO: Implement onSuccess() method.
    }

    public function addonInfo()
    {
        return [
            "name" => "Example Addon"
        ];
    }

    public function onExpire(array $params)
    {
        // TODO: Implement onExpire() method.
    }

    public function getConfig()
    {
        // TODO: Implement getConfig() method.
    }
}
