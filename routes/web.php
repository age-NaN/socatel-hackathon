<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

<<<<<<< HEAD
Route::get('/', function () {
    return view('app');
=======
Route::get('/interests', function () {
    return view('interests');
>>>>>>> 2a922fa6b3a062fee26a8abfd7c56946a0337899
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
