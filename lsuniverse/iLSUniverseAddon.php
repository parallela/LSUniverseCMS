<?php
namespace LSUniverse;

interface iLSUniverseAddon {
    public function onSuccess(array $params);
    public function addonInfo();
    public function onExpire(array $params);
    public function getConfig();
    //TODO
}
