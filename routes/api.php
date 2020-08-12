<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware'=>'api','prefix'=>'auth'], function($router) {

    Route::post('login', 'Backend\AuthController@login');
    Route::post('register', 'Backend\AuthController@register');
    Route::get('me', 'Backend\AuthController@me');
    Route::post('refresh', 'Backend\AuthController@refresh');
    Route::post('logout', 'Backend\AuthController@logout');

});
Route::group(['middleware'=>'api','prefix'=>'user'], function($router) {

    Route::get('verify/{token}', 'Backend\VerificationController@verify');


});