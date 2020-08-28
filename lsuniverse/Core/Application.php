<?php

namespace LSUniverse\Core;

class Application extends \Illuminate\Foundation\Application {
    /**
     * @return string
     */
    public function langPath()
    {
        $dir = __DIR__. DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR;
        return $dir.DIRECTORY_SEPARATOR.'Language'.DIRECTORY_SEPARATOR.'Backend'.DIRECTORY_SEPARATOR.'lang';
    }
}
