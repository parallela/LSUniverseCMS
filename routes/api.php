<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'middleware' => 'api'], function ($router) {

    Route::post('login', 'Backend\AuthController@login')->name('login');
    Route::post('register', 'Backend\AuthController@register')->name('register');
    Route::post('refresh', 'Backend\AuthController@refresh')->name('refresh');
    Route::post('logout', 'Backend\AuthController@logout')->name('logout');
    Route::get('verify/{token}', 'Backend\VerificationController@verify')->name('verify');
    Route::get('me', 'Backend\AuthController@me')->name('me');
});
Route::group(['middleware' => 'api', 'prefix' => 'user'], function ($router) {
});
