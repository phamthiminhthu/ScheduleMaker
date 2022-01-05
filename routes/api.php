<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\ClazzController;
use App\Http\Controllers\ScheduleController;
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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/current-user', [AuthController::class, 'getDataUser']);
    Route::post('/update-profile', [AuthController::class, 'updateUser']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    Route::post('/logout', [AuthController::class, 'logout']);

    //note
    Route::post('/create-notes', [NoteController::class, 'createNote']);
    Route::delete('/delete-note/{id}', [NoteController::class, 'deleteNote']);
    Route::post('/update-note/{id}', [NoteController::class, 'updateNote']);
    Route::get('/get-note-by-id/{id}', [NoteController::class, 'getNote']);
    Route::get('/get-all-notes', [NoteController::class, 'getAllNote']);
    Route::get('/get-event-id-max', [NoteController::class, 'getIDLast']);

    //subject
    // Route::post('/subject/add-subject', [SubjectController::class, 'createSubject']);
    Route::get('subject/get-all-subject', [SubjectController::class, 'getAllSubject']);
    Route::post('subject/find-subject-by-code', [SubjectController::class, 'getSubjectByCodeSubject']);
    // Route::post('/subject/update-subject/{codeSubject}', [SubjectController::class, 'updateSubject']);
    // Route::post('/subject/delete-subject/{id}', [SubjectController::class, 'deleteSubject']);
    // Route::get('/subject/get-subject-by-id/{id}', [SubjectController::class, 'getSubjectById']);

    //classes

    Route::get('class/list-class-by-id/{id}', [ClazzController::class, 'getClassBySubject']);

    //schedule
    Route::post('schedule/list-subject', [ScheduleController::class, 'createMySchedule']);

    Route::get('schedule/my-subject-schedule', [ScheduleController::class, 'getListSubjectSchedule']);

    Route::post('schedule/my-list-class-register', [ScheduleController::class, 'getListClassSchedule']);
    Route::get('schedule/my-schedule-class-register', [ScheduleController::class, 'getListClassOfSubjectMySchedule']);
    Route::get('schedule/clazz-id/{id}', [ScheduleController::class, 'getClassByIdClass']);
    Route::get('schedule/clazz-by-id/{id}', [ScheduleController::class, 'getOneClassById']);
    // Route::get('/subject/class/list-class/{id}', [ClazzController::class, 'getClassBySubject']);
    // Route::get('/getall', [SubjectController::class, 'getAlll']);

});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
