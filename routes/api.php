<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\SubjectController;
use App\Http\Controllers\Api\ClassController;
use App\Http\Controllers\AuthController;

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
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);



Route::group(['middleware'=>['auth:sanctum']], function (){
    Route::get('current-user', [AuthController::class, 'getDataUser']);
    Route::post('update-profile', [AuthController::class, 'updateUser']);
    Route::post('change-password', [AuthController::class, 'changePassword']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::resource('subject',SubjectController::class);

Route::group(['namespace' => 'Api', 'prefix' => 'v1'], function () {
    Route::group(['as' => 'api.v1.'], function () {
        Route::group(['prefix' => 'user',],
            function () {
                Route::get('/list/{id?}', [UserController::class, 'show']);
                Route::post('/register', [AuthController::class, 'register']);
                Route::put('/update/{id}', [UserController::class, 'update']);
                Route::get('/search/{name?}', [UserController::class, 'search']);
                Route::delete('/delete/{id}', [UserController::class, 'destroy']);
    });

        Route::group(['prefix' => 'subject',],
            function () {
                Route::post('/store', [SubjectController::class, 'store']); 
                Route::put('/update/{id}', [SubjectController::class, 'update']);
                Route::get('/list/{id?}', [SubjectController::class, 'show']);
                Route::delete('/delete/{id}', [SubjectController::class, 'destroy']);
        });

        Route::group(['prefix' => 'class',],
        function () {
            Route::post('/store', [ClassController::class, 'store']); 
            Route::put('/update/{id}', [ClassController::class, 'update']);
            Route::get('/list/{id?}', [ClassController::class, 'show']);
            Route::get('/index', [ClassController::class, 'index']);
            Route::delete('/delete/{id}', [ClassController::class, 'destroy']);
        });
    });
});

