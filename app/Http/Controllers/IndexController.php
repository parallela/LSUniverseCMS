<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use LSUniverse\Core\Routers;
use LSUniverse\Core\SiteCache;

class IndexController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $s = Cache::get('settings');
        $api_routers = Routers::getApiRoutes();

//        dd($api_routers);

        return view('app', compact('s', 'api_routers'));
    }
}
