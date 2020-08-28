<?php
/*
 *  LSUniverseCMS - Automatic billing system for game hosting
 *  Copyright (c) 2020
 *  Lubomir Stankov <lubomir.c.stankov@gmail.com>
 *  Djelal Mollov <djelalmollov@gmail.com>
 *  ****************************************************************
 *  This software is licensed under the terms of the MIT License.
 *  https://opensource.org/licenses/MIT
 */
namespace LSUniverse;

interface iLSUniverseAddon {
    public function onSuccess(array $params);
    public function addonInfo();
    public function onExpire(array $params);
    public function getConfig();
    //TODO
}
