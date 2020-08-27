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
    Route::post('password/forget/generate', 'Backend\PasswordController@forget_password_generate')->name('forget_generate');
    Route::post('password/forget/check', 'Backend\PasswordController@forget_valid')->name('forget_check');
    Route::post('password/forget/change', 'Backend\PasswordController@change_forget_password')->name('forget_change');
    Route::post('password/change', 'Backend\PasswordController@change_password')->name('change_password');

   Route::group(['middleware'=>'api', 'prefix'=>'update'] , function ($router) {
      Route::post('/details', 'Backend\UserController@update_user_details');
   });

   Route::group(['middleware'=>'api', 'prefix'=>'tickets'], function ($router) {
      Route::post('/create', 'Backend\TicketsController@create');
      Route::post('/delete/{id}', 'Backend\TicketsController@delete');
      Route::post('/update/{id}', 'Backend\TicketsController@update');
      Route::post('/create/{id}', 'Backend\TicketsController@add_answer');
      Route::get('/show/{id}', 'Backend\TicketsController@show');
      Route::get('/', 'Backend\TicketsController@list');

   });

   Route::get('services', 'Backend\UserController@get_user_services');
});
Route::group(['middleware' => ['api','isadmin'], 'prefix'=>'admin'], function ($router) {
    Route::post('addons/create', 'Backend\Admin\AddonController@create');
    Route::get('addons/list', 'Backend\Admin\AddonController@list');
});

Route::get('departments/list', 'Backend\DepartmentsController@list')->middleware('api');
Route::get('site/settings','IndexController@siteSettings')->middleware('api');
