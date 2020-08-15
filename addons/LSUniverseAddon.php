<?php
namespace LSUniverse\Addons;

interface LSUniverseAddon {
    public function onSuccess();
    public function addonInfo();
    public function activate();
    public function onExpire();
    public function config();
    //TODO
}