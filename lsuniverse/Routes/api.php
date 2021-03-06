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
    Route::post('password/forget/change', 'Backend\PasswordController@change_forget_password')->name('forget_change');
    Route::post('password/change', 'Backend\PasswordController@change_password')->name('change_password');

   Route::group(['middleware'=>'api', 'prefix'=>'update'] , function ($router) {
      Route::post('/details', 'Backend\UserController@update_user_details')->name('user_details');
   });

   Route::group(['middleware'=>'api', 'prefix'=>'tickets'], function ($router) {
      Route::post('/create', 'Backend\TicketsController@create')->name('create_user_ticket');
      Route::post('/delete/{id}', 'Backend\TicketsController@delete')->name('delete_user_ticket');
      Route::post('/update/{id}', 'Backend\TicketsController@update')->name('update_user_ticket');
      Route::post('/create/{id}', 'Backend\TicketsController@add_answer')->name('create_user_ticket_answer');
      Route::get('/show/{id}', 'Backend\TicketsController@show')->name('show_user_ticket');
      Route::get('/', 'Backend\TicketsController@list')->name('get_user_tickets');

   });

   Route::get('services', 'Backend\UserController@get_user_services')->name('get_user_services');
});
Route::group(['middleware' => ['api','isadmin'], 'prefix'=>'admin'], function ($router) {
    Route::post('addons/create', 'Backend\Admin\AddonController@create')->name('create_addon');
    Route::get('addons/list', 'Backend\Admin\AddonController@list')->name('show_addons');
});

Route::get('departments/list', 'Backend\DepartmentsController@list')->middleware('api')->name('site_departments');
Route::get('site/settings','IndexController@siteSettings')->middleware('api')->name('site_settings');
Route::get('site/categories', 'Backend\CategoriesController@list')->name('site_categories');
