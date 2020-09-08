<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use LSUniverse\Core\SiteCache;

class IndexController extends Controller
{
    public function __construct()
    {
       SiteCache::initRoutersCache();
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $s = Cache::get('settings');


        $api_routers = Cache::get('api_routes');


        return view('app', compact('s', 'api_routers'));
    }
}
