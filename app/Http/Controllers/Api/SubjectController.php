<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $course = Course::all();
        return response()->json(['data' => $course]);
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
            'courseName' => 'required|string',
            'tin_chi_diem' => 'required|required',
            'tin_chi_hoc_phi' => 'required|integer',
            'courseID' => 'required'
        ]);
        $course = Course::create(
            [   
                'courseID' => $fields['courseID'],
                'courseName' => $fields['courseName'],
                'tin_chi_diem' => $fields['tin_chi_diem'],
                'tin_chi_hoc_phi' => $fields['tin_chi_hoc_phi'],
            ]);

            return response()->json([
                'code' => 201,
                'data' => $course
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
        return $id?Course::find($id):Course::all();
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
        $course = Course::find($id);
        $course->courseName = $request->courseName;
        $course->tin_chi_diem = $request->tin_chi_diem;
        $course->tin_chi_hoc_phi = $request->tin_chi_hoc_phi;
        $course->save();


        return response()->json([
            'code' => 203,
            'data' => $course
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
        $course = Course::find($id);
        $result = $course->delete();

        return response()->json([
            'code' => 204,
            'message' => "Data has been deleted"
        ], status: 204);
    }
}
