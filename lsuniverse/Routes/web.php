<?php

use Illuminate\Support\Facades\Route;


Route::any('/{path?}','IndexController@index');

// Register multipath route
Route::view('/password/reset', 'app');
Route::view('/page/{path?}', 'app');
