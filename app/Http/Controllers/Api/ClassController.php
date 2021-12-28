<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Clazz;
use Illuminate\Support\Facades\DB;
use App\Models\Course;
class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return DB::table('clazz')
        ->join('course','clazz.courseID',"=",'course.courseID')
        ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $fields = $request->validate([
            'classID' => 'required',
            'courseID' => 'required',
            'teacherID' => 'required',
            'startTime' => 'required',
            'endTime' => 'required',
            'thu' => 'required'
        ]);
        $clazz = Clazz::create(
            [   
                'classID' => $fields['classID'],
                'courseID' => $fields['courseID'],
                'teacherID' => $fields['teacherID'],
                'startTime' => $fields['startTime'],
                'endTime' => $fields['endTime'],
                'thu' => $fields['thu'],
            ]);

            return response()->json([
                'code' => 201,
                'data' => $clazz
            ], status: 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id=null)
    {
        //
        return $id?Clazz::find($id):Clazz::all();

        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $clazz = Clazz::find($id);
        $clazz->classID = $request->classID;
        $clazz->courseID = $request->courseID;
        $clazz->teacherID = $request->teacherID;
        $clazz->startTime = $request->startTime;
        $clazz->endTime = $request->endTime;
        $clazz->thu = $request->thu;
        $clazz->save();


        return response()->json([
            'code' => 203,
            'data' => $clazz
        ], status: 203);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $clazz = Clazz::find($id);
        $result = $clazz->delete();

        return response()->json([
            'code' => 204,
            'message' => "Data has been deleted"
        ], status: 204);
    }
}
