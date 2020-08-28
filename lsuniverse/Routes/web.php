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

use Illuminate\Support\Facades\Route;


Route::any('/{path?}','IndexController@index');

// Register multipath route
Route::view('/password/reset', 'app');
Route::view('/page/{path?}', 'app');
