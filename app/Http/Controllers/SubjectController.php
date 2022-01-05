<?php

namespace App\Http\Controllers;

use App\Models\Clazz;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{

    public function getAllSubject()
    {
        $subjects = Subject::all();
        return response()->json([
            'listSubject' => $subjects,
            'status' => 200,
        ]);
    }

    public function getSubjectByCodeSubject(Request $request)
    {
        $subject = Subject::where('code_subject', '=', $request->codeSubject)->first();
        if ($subject != null) {
            return response()->json([
                'subject' => $subject,
                'status' => 200,
                'message' => 'find successfully',

            ]);
        } else {
            return response()->json([
                'message' => 'not subject',
                'status' => 404,

            ]);
        }
    }

    public function getClassBySubject($id)
    {

        $subject = Subject::where('code_subject', '=', $id)->first();
        $listClass = Clazz::where('subject_id', '=', $subject->code_subject)->get();
        return $listClass;

    }

    //đếm số buổi học của 1 môn học đó trong 1 tuần
    // public function countTimeWeekDaySubject($codeClass, $codeClassSub){
    //    if($codeClass == $codeClassSub){
    //        $subject = Clazz::where('clazz_code', '=', $codeClass)->get();
    //        $countSub = $subject->count();
    //        return $countSub;

    //    }else{
    //        $subject1 = Clazz::where('clazz_code', '=', $codeClass )->get();
    //        $subject2 = Clazz::where('clazz_code', '=', $codeClassSub )->get();
    //        $countSub = $subject1->count() + $subject2->count();
    //        return $countSub;

    //    }

    // }
    // //check thời gian của 2 môn học
    // public function checkTimeTwoSubject($codeClass1, $codeClass2){
    //     $subject1 = Clazz::where('clazz_code', '='. $codeClass1)->get();
    //     $subject2 = Clazz::where('clazz_code', '=', $codeClass2)->get();
    //     if($subject2->count() == 1  && $subject1->count() == 1){}



    // }


    // public function checkClassDifferentCodeClass(){

    // }

    



    // public function getAllSchedule(Request $request)
    // {

    //     //DANH SACH LOP CO KEY LA MA LOP, VALUE : DANH SACH LOP
    //     $listSubject = $request->listSubject;
    //     $listCourseID = array_column($listSubject, 'courseID');
    //     $listClass = array();
    //     foreach ($listCourseID as $subjectCode) {
    //         $listClass +=  array($subjectCode => $this->getClassBySubject($subjectCode));
    //     }

    //     // SORT THEO SO LUONG LOP
    //     $listClassCount = array();
    //     foreach($listClass as $clazz => $value){
    //         $listClassCount += array($clazz => count($value));
    //     }
    //     asort($listClassCount);

    //     //list subject sorted by so luong lop 
    //     $listClassSubSorted = array();
    //     foreach($listClassCount as $clazz => $value){
    //         $listClassSubSorted += array($clazz => $this->getClassBySubject($clazz));
    //     }





    //     return  $listClassSubSorted;
    // }

    // public function getMySchedule(Request $request){


    // }
}
