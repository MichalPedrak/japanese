<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\Authenticate;
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
Route::middleware('guest')->group(function () {
    Route::get('/login', [\App\Http\Controllers\AuthController::class, 'create'])->name('login');
    Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('/register', [\App\Http\Controllers\AuthController::class, 'store']);

});




Route::middleware([Authenticate::class])->group(function () {
    Route::get('/', function () {
        return Inertia('HomeView');
    });

    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);


    Route::middleware('admin')->group(function () {

        Route::get('/admin', function () {
            return Inertia('AdminView');
        });

        Route::get('/admin/cards/{id?}', [\App\Http\Controllers\CardsController::class, 'index']);
        Route::get('/admin/cards/single/{id?}', [\App\Http\Controllers\CardsController::class, 'single']);
        Route::put('/admin/cards/single/move/{id?}', [\App\Http\Controllers\CardsController::class, 'move']);
        Route::post('/admin/cards/store/', [\App\Http\Controllers\CardsController::class, 'store']);
        Route::patch('/admin/cards/update/{id}', [\App\Http\Controllers\CardsController::class, 'update']);
        Route::delete('/admin/cards/destroy/{id}', [\App\Http\Controllers\CardsController::class, 'destroy']);


        Route::post('/admin/groups/store', [\App\Http\Controllers\GroupsController::class, 'store']);
        Route::get('/admin/groups', [\App\Http\Controllers\GroupsController::class, 'index']);
        Route::get('/admin/groups/show', [\App\Http\Controllers\GroupsController::class, 'getGroups']);
        Route::delete('/admin/groups/destroy/{id}', [\App\Http\Controllers\GroupsController::class, 'destroy']);


        Route::get('/admin/users', [\App\Http\Controllers\UserController::class, 'index']);


    });


});

