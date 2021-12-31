<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\SubjectController;
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
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('current-user', [AuthController::class, 'getDataUser']);
    Route::post('update-profile', [AuthController::class, 'updateUser']);
    Route::post('change-password', [AuthController::class, 'changePassword']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('add-subject', [SubjectController::class, 'store']);
    Route::get('list-subject', [SubjectController::class, 'index']);
    Route::post('create-notes', [NoteController::class, 'createNote']);
    Route::delete('delete-note/{id}', [NoteController::class, 'deleteNote']);
    Route::post('update-note/{id}', [NoteController::class, 'updateNote']);
    Route::get('get-note-by-id/{id}', [NoteController::class, 'getNote']);
    Route::get('get-all-notes', [NoteController::class, 'getAllNote']);
    Route::get('get-event-id-max', [NoteController::class, 'getIdMaxEvent']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
