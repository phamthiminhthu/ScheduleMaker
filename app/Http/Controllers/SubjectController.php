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

    // public function createSubject(Request $request)
    // {
    //     $request->validate([
    //         'code_subject' => 'required',
    //         'name_subject' => 'required',
    //         'amount_subject' => 'required|min:0',
    //         'amount_money' => 'required|min:0',
    //         'score' => 'required|min:0',
    //         'status' => 'required',
    //     ]);

    //     $subject = new Subject([
    //         'code_subject' => $request->code_subject,
    //         'name_subject' => $request->name_subject,
    //         'amount_subject' => $request->amount_subject,
    //         'amount_money' => $request->amount_money,
    //         'score' => $request->score,
    //         'status' => 1,
    //     ]);
    //     $subject->save();

    //     return response()->json([
    //         'request' => $request,
    //         'status' => 200,
    //         'subject' => $subject,
    //         'message' => 'Subject created successfully',
    //     ]);
    // }

    // public function updateSubject(Request $request, $codeSubject)
    // {
    //     $request->validate([
    //         'code_subject' => 'required',
    //         'name_subject' => 'required',
    //         'amount_subject' => 'required|min:0',
    //         'amount_money' => 'required|min:0',
    //         'score' => 'required|min:0',
    //         'status' => 'required',
    //     ]);

    //     $subject = Subject::where('code_subject', '=', $codeSubject)->first();
    //     $subject->code_subject = $request->code_subject;
    //     $subject->name_subject = $request->name_subject;
    //     $subject->amount_subject = $request->amount_subject;
    //     $subject->amount_money = $request->amount_money;
    //     $subject->score = $request->score;
    //     $subject->status = $request->status;
    //     $subject->save();
    //     return response()->json([
    //         'subject' => $subject,
    //         'status' => 200,
    //         'message' => "Subject update successfully",
    //     ]);

    // }

    // public function deleteSubject($id, Request $request)
    // {
    //     $subject = Subject::where('code_subject', '=', $codeSubject)->first();
    //     $subject->status = $request->status;
    //     $subject->save();
    //     return response()->json([
    //         'subject' => $subject,
    //         'message' => 'Deleted successfully',
    //         'status' => 200,
    //     ]);

    // }

    // public function getSubjectById($id)
    // {
    //     $subject = Subject::findOrFail($id);
    //     return response()->json([
    //         'subject' => $subject,
    //         'status' => 200,

    //     ]);
    // }

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

    
    public function countTimeWeekDaySubject($codeClass, $codeClassSub){
       if($codeClass == $codeClassSub){
           $subject = Subject::where('clazz_code', '=', $codeClass)->get();
           $countSub = $subject->count();
           return $countSub;

       }else{
           $subject1 = Subject::where('clazz_code', '=', $codeClass )->get();
           $subject2 = Subject::where('clazz_code', '=', $codeClassSub )->get();
           $countSub = $subject1->count() + $subject2->count();
           return $countSub;

       }

    }

    // public function checkTimeTwoSubject($codeClass1, $codeClass2){
    //     $subject1 = Subject:



    // }


    public function checkClassDifferentCodeClass(){

    }

    



    public function getAllSchedule(Request $request)
    {

        //DANH SACH LOP CO KEY LA MA LOP, VALUE : DANH SACH LOP
        $listSubject = $request->listSubject;
        $listCourseID = array_column($listSubject, 'courseID');
        $listClass = array();
        foreach ($listCourseID as $subjectCode) {
            $listClass +=  array($subjectCode => $this->getClassBySubject($subjectCode));
        }

        // SORT THEO SO LUONG LOP
        $listClassCount = array();
        foreach($listClass as $clazz => $value){
            $listClassCount += array($clazz => count($value));
        }
        asort($listClassCount);

        //list subject sorted by so luong lop 
        $listClassSubSorted = array();
        foreach($listClassCount as $clazz => $value){
            $listClassSubSorted += array($clazz => $this->getClassBySubject($clazz));
        }





        return  $listClassSubSorted;
    }

}
