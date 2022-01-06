<?php

namespace App\Http\Controllers;

use App\Models\Clazz;
use App\Models\Schedule;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{

    public function checkTimeClass($clazzOne, $clazzTwo){
        

    }

    public function getListClassBySubject($id)
    {
        $subject = Subject::where('code_subject', '=', $id)->first();
        if ($subject != null) {
            $listClass = Clazz::where('subject_id', '=', $subject->code_subject)->where('clazz_code_sub', '!=', '')->get()->toArray();
            return $listClass;
        } else {
            return response()->json([
                'message' => 'Not have subject',
                'status' => 404,
            ]);

        }
    }

    public function getOneClassById($id)
    {
        $clazz = Clazz::findOrFail($id);
        return $clazz;
    }

    public function getListSubjectSchedule()
    {
        $listSubjectCode = Schedule::where('user_id', Auth::user()->id)->value('list_subject_code');
        $listClassScheduleCode = Schedule::where('user_id', Auth::user()->id)->value('list_id_class');
        $listCourseID = explode(",", $listSubjectCode);
        $listClassOfSubject = array();
        $listSubject = array();
        if (count($listCourseID) > 0) {
            foreach ($listCourseID as $courseID) {
                $subject = Subject::where('code_subject', '=', $courseID)->first();
                array_push($listSubject, $subject);
                if (is_array($this->getListClassBySubject($courseID))) {
                    $listClassOfSubject += array($courseID => collect(array_intersect_key($this->getListClassBySubject($courseID), array_unique(array_column($this->getListClassBySubject($courseID), 'clazz_code'))))->values()->all());

                }
            }
        }

        if ($listClassScheduleCode != null) {
            $listClassOneById = explode(",", $listClassScheduleCode);
            $listClassByOneId = array();
            foreach ($listClassOneById as $clazzId) {
                array_push($listClassByOneId, $this->getOneClassById($clazzId));
            }

        }
        return response()->json([
            'listSubject' => $listSubject,
            'listClassBySubjectCode' => $listClassOfSubject,
            'listClassByOneId' => $listClassByOneId,
            'message' => "Get successfully",
            'status' => 200,
        ]);
    }

    //lấy ra lớp mà gửi lên
    public function getListClassSchedule(Request $request)
    {
        $listClass = $request->listClass;
        $str = "";

        for ($i = 0; $i < count($listClass); $i++) {
            if ($i < (count($listClass) - 1)) {
                $str = $str . $listClass[$i] . ",";
            } else {
                $str = $str . $listClass[$i];
            }
        }

        $schedule = Schedule::where('user_id', Auth::user()->id)->first()->update(['list_id_class' => $str]);
        return response()->json([
            'message' => 'updated successfully',
            'status' => 200,
            'schedule' => $schedule,
        ]);

    }

    public function createMySchedule(Request $request)
    {
        $str = "";
        $listSubject = $request->listSubject;
        $listCourseID = array_column($listSubject, 'courseID');
        for ($i = 0; $i < count($listCourseID); $i++) {
            if ($i < (count($listCourseID) - 1)) {
                $str = $str . $listCourseID[$i] . ",";
            } else {
                $str = $str . $listCourseID[$i];
            }
        }

        $schedule = Schedule::where('user_id', Auth::user()->id)->first();
        if ($schedule == null) {
            $schedule = new Schedule([
                'user_id' => Auth::user()->id,
                'list_subject_code' => $str,
                'list_id_class' => "",
            ]);
            $schedule->save();
            return response()->json([
                'listSubjectID' => $schedule,
                'message' => "Create schedule sucessfully",
            ]);

        } else {

            $schedule = Schedule::where('user_id', Auth::user()->id)->first()->update(['list_subject_code' => $str]);
            return response()->json([
                'updateListSubCode' => $schedule,
                'message' => "Update schedule sucessfully",
            ]);
        }

    }

    public function getClassByIdClass($id)
    {
        $clazz = Clazz::findOrFail($id);
        $clazz_code_sub = $clazz->clazz_code_sub;
        $clazz_code = $clazz->clazz_code;
        $subject_code = $clazz->subject_id;
        $name_subject = Subject::where('code_subject', '=', $subject_code)->value('name_subject');
        $result = array();
        if ($clazz_code_sub == $clazz_code) {
            $res = Clazz::where('clazz_code', '=', $clazz_code)->get();
            foreach ($res as $item) {
                $value = [
                    'name_subject' => $name_subject,
                    'clazz_code' => $item->clazz_code,
                    'clazz_code_sub' => $item->clazz_code_sub,
                    'name_clazz' => $item->name_clazz,
                    'week_day' => $item->week_day,
                    'startime' => $item->startime,
                    'endtime' => $item->endtime,
                ];
                $result += array($item->week_day => $value);

            }

        } else {
            $listClassByCodeClass = Clazz::findOrFail($id)->toArray();
            $listClassByCodeClassSub = Clazz::where('clazz_code', '=', $clazz_code_sub)->get()->toArray();
            $convertArray = array();
            array_push($convertArray, $listClassByCodeClass);
            $listItem = array_merge($convertArray, $listClassByCodeClassSub);

            foreach ($listItem as $item) {
                $value = [
                    'name_subject' => $name_subject,
                    'clazz_code' => $item['clazz_code'],
                    'clazz_code_sub' => $item['clazz_code_sub'],
                    'name_clazz' => $item['name_clazz'],
                    'week_day' => $item['week_day'],
                    'startime' => $item['startime'],
                    'endtime' => $item['endtime'],
                ];

                $result += array($item['week_day'] => $value);
            }

        }

        return $result;

    }

    public function getListClassOfSubjectMySchedule()
    {
        $strClass = Schedule::where('user_id', Auth::user()->id)->first()->value('list_id_class');
        $listClassID = explode(",", $strClass);
        $result = array();
        foreach ($listClassID as $item) {
            $res = $this->getClassByIdClass($item);
            foreach ($res as $key => $values) {
                if (!key_exists($key, $result)) {
                    $result[$key][] = $values;
                } else {
                    $result[$key] = $result[$key];
                    $result[$key][] = $values;
                }

            }
        };

        $resultFinal = array();
        foreach ($result as $i => $val) {
            $col = array_column($val, "startime");
            array_multisort($col, SORT_ASC, $val);
            $resultFinal += array($i => $val);
        }

        return $resultFinal;
    }


    

    public function compareTimeClazzes($listClazz){

    }
}
