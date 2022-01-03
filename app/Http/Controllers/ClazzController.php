<?php

namespace App\Http\Controllers;
use App\Models\Subject;
use App\Models\Clazz;

class ClazzController extends Controller
{
    public function getClassBySubject($id)
    {

       $subject = Subject::where('code_subject', '=', $id)->first();
       if($subject != null){
           $listClass = Clazz::where('subject_id', '=', $subject->code_subject)->get();
           return response()->json([
               'message' => 'Find all class',
               'listClass' => $listClass,
               'status' => 200
           ]);
       }else{

        return response()->json([
            'message'=>'Not have subject',
            'status' => 404
        ]);

       }

    }
}
