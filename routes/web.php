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

Route::get('/', 'AppController@index');

//for a different approach for loading resources 
//Route::get('/videogames', 'AppController@getGames');

Route::post('/videogames', 'AppController@createGame');

Route::delete('/videogames/delete', 'AppController@destroyGame'); //add /{id} for a different approach

Route::post('/cooking', 'AppController@createWebsite');

Route::post('/cookingRecipe', 'AppController@createRecipe');
