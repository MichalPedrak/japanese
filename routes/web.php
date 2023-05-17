<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia('HomeView');
});
Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('/login', [\App\Http\Controllers\AuthController::class, 'create']);
Route::post('/register', [\App\Http\Controllers\AuthController::class, 'store']);


//Route::middleware('auth:sanctum')->group(function (){
//Route::get('/user', [\App\Http\Controllers\AuthController::class, 'user']);
//Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);

Route::post('/cards/store/', [\App\Http\Controllers\CardsController::class, 'store']);
Route::patch('/cards/update/{id}', [\App\Http\Controllers\CardsController::class, 'update']);
Route::delete('/cards/destroy/{id}', [\App\Http\Controllers\CardsController::class, 'destroy']);
//});

Route::get('/fiszki', [\App\Http\Controllers\GroupsController::class, 'index']);
Route::post('/groups/store', [\App\Http\Controllers\GroupsController::class, 'store']);


Route::get('/cards/{id?}', [\App\Http\Controllers\CardsController::class, 'index']);


//Route::get('/users', [\App\Http\Controllers\AuthController::class, 'users']);
//Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
//Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

