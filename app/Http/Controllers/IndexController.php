<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class IndexController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        Cache::remember('settings', 30, function () {
            $settings = Setting::all()->toArray();
            $s = [];

            foreach ($settings as $k => $v) {
                $s[$v['key']] = $v['value'];
            }

            return $s;
        });
        $s = Cache::get('settings');


        return view('app', compact('s'));
    }
}
