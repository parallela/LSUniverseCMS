<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $settings = Setting::all()->toArray();
        $s = [];

        foreach ($settings as $k => $v) {
            $s[$v['key']] = $v['value'];
        }


        return view('app',compact('s'));
    }
}
