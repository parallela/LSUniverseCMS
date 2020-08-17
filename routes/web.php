<?php

use Illuminate\Support\Facades\Route;


Route::view('/{path?}','app');

// Register multipath route
Route::view('/password/reset', 'app');
Route::view('/page/{path?}', 'app');