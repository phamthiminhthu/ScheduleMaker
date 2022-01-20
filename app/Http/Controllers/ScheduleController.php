<?php

namespace App\Http\Controllers;

use App\Models\Clazz;
use App\Models\Schedule;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{

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
                    $listClassOfSubject += array($courseID." - ".$subject->name_subject => collect(array_intersect_key($this->getListClassBySubject($courseID), array_unique(array_column($this->getListClassBySubject($courseID), 'clazz_code'))))->values()->all());

                }
            }
        }
        $listClassByOneId = array();

        if ($listClassScheduleCode != null) {
            $listClassOneById = explode(",", $listClassScheduleCode);

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

    public function compareTwoClazz($idClazzOne, $idClazzTwo)
    {
        $clazzOne = Clazz::findOrFail($idClazzOne);
        $clazzTwo = Clazz::findOrFail($idClazzTwo);
        $time1Start = $clazzOne->startime;
        $time1End = $clazzOne->endtime;
        $time2Start = $clazzTwo->startime;
        $time2End = $clazzTwo->endtime;
        $weekday1 = $clazzOne->week_day;
        $weekday2 = $clazzTwo->week_day;
        $res = 1;
        if ($weekday1 == $weekday2) {
            if ($time1Start <= $time2Start) {
                if ($time1Start == $time2Start || $time2Start <= $time1End) {
                    $res = 0;
                }
            } else {
                if ($time1Start <= $time2End) {
                    $res = 0;

                }
            }
        }

        return $res;
    }

    public function checkTimeClazzes($resultFinal)
    {
        $test = true;
        foreach ($resultFinal as $key => $value) {
            if (count($value) >= 2) {
                for ($i = 0; $i < count($value) - 1; $i++) {
                    for ($j = $i + 1; $j < count($value); $j++) {
                        if (($this->compareTwoClazz($value[$i]['id_class'], $value[$j]['id_class'])) == 0) {

                            $test = false;
                            return [
                                'test' => $test,
                                'clazzOne' => $value[$i],
                                'clazzTwo' => $value[$j],
                                'key' => $key,
                            ];
                        }
                    }
                }
            }
        }

        return [
            'test' => $test,
            'message' => "Succesfully",
        ];
    }

    //lấy ra lớp mà gửi lên
    public function getListClassSchedule(Request $request)
    {
        $listClass = $request->listClass;
        $listClazz = $listClass;
        $listClazz = implode(",", $listClass);
        $str = "";
        $listClassID = explode(",", $listClazz);
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

        $test = $this->checkTimeClazzes($resultFinal);
        if ($test['test']) {
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
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Fails',
                'clazzOneFails' => $test['clazzOne'],
                'clazzTwoFails' => $test['clazzTwo'],
            ]);
        }

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
            // if ($schedule->list_id_clazz != null) {
            //     $strListClazz = $schedule->list_id_clazz;
            //     $listClazz = implode(",", $strListClazz);
            //     if(count( $listClazz) > count($listCourseID)){
            //         $schedule = Schedule::where('user_id', Auth::user()->id)->first()->update(['list_id_clazz' => null]);
            //     }

            // } else {

            // }
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
                    'id_class' => $item->id,
                    'id_subject' => $item->subject_id,
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
                    'id_subject' => $item['subject_id'],
                    'id_class' => $item['id'],
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
        $strClass1 = Schedule::where('user_id', Auth::user()->id)->first();
        $strClass =$strClass1->list_id_class;
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

    public function getListTimeOfClassId($classID)
    {
        $listClazz = Clazz::where('clazz_code', '=', $classID)->get();
        $result = array();
        $flag = 0;
        foreach ($listClazz as $item) {
            if ($item->clazz_code == $item->clazz_code_sub) {
                $value = [
                    'id_clazz' => $item->id,
                    'week_day' => $item->week_day,
                    'start_time' => $item->startime,
                    'end_time' => $item->endtime,
                ];
                array_push($result, $value);

            } else {
                $clazzCodeSub = Clazz::where('clazz_code', '=', $item->clazz_code_sub)->first();
                $value1 = [

                    'id_clazz' => $item->id,
                    'week_day' => $item->week_day,
                    'start_time' => $item->startime,
                    'end_time' => $item->endtime,
                ];

                $value2 = [

                    'id_clazz' => $clazzCodeSub->id,
                    'week_day' => $clazzCodeSub->week_day,
                    'start_time' => $clazzCodeSub->startime,
                    'end_time' => $clazzCodeSub->endtime,
                ];

                array_push($result, $value1);
                array_push($result, $value2);

            }
        }
        return array($classID => $result);
    }

    public function checkTwoSubjectSameTime($classCode1, $classCode2)
    {
        $listClazzOne = $this->getListTimeOfClassId($classCode1);
        $listClazzTwo = $this->getListTimeOfClassId($classCode2);

        $res = 0;
        $newListClazzOne = $newListClazzTwo = array();
        foreach ($listClazzOne as $k => $value) {
            foreach ($value as $v) {
                $val = [
                    'week_day' => $v['week_day'],
                    'start_time' => $v['start_time'],
                    'end_time' => $v['end_time'],
                ];
                array_push($newListClazzOne, $val);
            }
        }
        foreach ($listClazzTwo as $k => $value) {
            foreach ($value as $v) {
                $val = [
                    'week_day' => $v['week_day'],
                    'start_time' => $v['start_time'],
                    'end_time' => $v['end_time'],
                ];
                array_push($newListClazzTwo, $val);
            }
        }
        if ($newListClazzOne == $newListClazzTwo) {
            $res = 1;
        }
        return $res;

    }

    public function getListClazzAndTimeByCodeSubject($codeSubject)
    {

        $listClazzID = Clazz::where('subject_id', '=', $codeSubject)->where('clazz_code_sub', '!=', '')->distinct()->get(['clazz_code']);
        $result = array();
        $check = 0;
        foreach ($listClazzID as $clazzID) {
            $res = $this->getListTimeOfClassId($clazzID->clazz_code);
            if ($check == 0) {
                $result += $res;
                $check = 1;
            } else {
                $check2 = 0;
                foreach ($result as $k => $v) {

                    if (($this->checkTwoSubjectSameTime($k, $clazzID->clazz_code)) == 1) {
                        $check2 = 1;
                        break;
                    }
                }
                if ($check2 == 0) {
                    $result += $res;
                }
            }

        }
        return $result;
    }

    public function checkTimeOfTwoClazzCode($clazzCodeOne, $clazzCodeTwo)
    {
        $clazzOne = $this->getListTimeOfClassId($clazzCodeOne);
        $clazzTwo = $this->getListTimeOfClassId($clazzCodeTwo);
        $listTimeOne = array($clazzOne[$clazzCodeOne]);
        $listTimeTwo = array($clazzTwo[$clazzCodeTwo]);
        $res = 1;
        foreach ($listTimeOne[0] as $val1) {

            foreach ($listTimeTwo[0] as $val2) {

                if (($this->compareTwoClazz($val1['id_clazz'], $val2['id_clazz'])) == 0) {
                    $res = 0;
                    return $res;
                }
            }
        }
        return $res;

    }

    public function getSortClazzOfMySubjectChoose()
    {
        $strSubject1 = Schedule::findOrFail(Auth::user()->id);
        $strSubject = $strSubject1->list_subject_code;
        $strSubjectSubCode = explode(",", $strSubject);
        $listSubjectID = Clazz::whereIn('subject_id', $strSubjectSubCode)->distinct()->get(['subject_id']);
        $result = array();
        foreach ($listSubjectID as $subjectID) {
            $res = $this->getListClazzAndTimeByCodeSubject($subjectID->subject_id);
            $result += array($subjectID->subject_id => $res);
        }
        array_multisort(array_map('count', $result), SORT_ASC, $result);

        return  $result;
    }

    public function getAllNextClazzCorrect($listClazzHad, $subjectID, $listResult)
    {
        $list = $listResult[$subjectID];
        $listSameTime = array();
        foreach ($list as $k => $v) {
            foreach ($listClazzHad as $kHad) {
                if (($this->checkTimeOfTwoClazzCode($kHad, $k)) == 0) {
                    $listSameTime += array($k => $v);

                }
            }
        }
        $results = array_diff(array_map('serialize', $list), array_map('serialize', $listSameTime));
        $result = array_map('unserialize', $results);
        return $result;

    }

    public function checkTimeTableTrueOrFalse($listTimeTable, $listResult)
    {
        $res = 0;
        if (count($listTimeTable) == count($listResult)) {
            $res = 1;
        }
        return $res;
    }

    public function getAllAutoSchedule()
    {
        $listScheduleResult = array();
        $listSubjectAndClazz = $this->getSortClazzOfMySubjectChoose();
        if (count($listSubjectAndClazz) == 0) {
            return null;
        } else if (count($listSubjectAndClazz) == 1) {
            foreach ($listSubjectAndClazz as $k => $value) {
                foreach ($value as $i => $val) {
                    array_push($listScheduleResult, $i);
                }

            }
            return array(0 => $listScheduleResult);
        } else {
            $keyList = array_keys($listSubjectAndClazz);
            foreach (array_keys($keyList) as $index) {
                foreach ($listSubjectAndClazz as $k => $value) {
                    $listStack = array();
                    foreach ($value as $v => $v1) {
                        $listStack += array($v => array($v));
                        while (!empty($listStack)) {
                            $valueElementListStack = reset($listStack);
                            array_shift($listStack);
                            if (count($valueElementListStack) == count($listSubjectAndClazz)) {
                                $listStack = array();
                                break;
                            }
                            $listCorrect = $this->getAllNextClazzCorrect($valueElementListStack, $keyList[count($valueElementListStack)], $listSubjectAndClazz);
                            foreach ($listCorrect as $item => $v2) {
                                $listTimeTable = $valueElementListStack;
                                array_push($listTimeTable, $item);
                                if (count($listTimeTable) == count($listSubjectAndClazz)) {
                                    array_push($listScheduleResult, $listTimeTable);
                                } else {
                                    $listStack += array($item => $listTimeTable);
                                }
                            }
                        }
                    }
                    break;
                }
                break;

            }

        }
        return array(1 => $listScheduleResult);
    }

    public function getTimeSubjectClazzCode($clazzCode)
    {
        $listClazzes = Clazz::where('clazz_code', '=', $clazzCode)->first();
        $clazzes = Clazz::where('subject_id', '=', $listClazzes->subject_id)->where('clazz_code_sub', '!=', '')->distinct()->get(['clazz_code']);
        $subject = Subject::where('code_subject', '=', $listClazzes->subject_id)->first();
        $listSameTime = array();
        foreach ($clazzes as $clazz) {
            if ($this->checkTwoSubjectSameTime($clazzCode, $clazz->clazz_code)) {
                array_push($listSameTime, $clazz->clazz_code);
            }
        }
        $listStrSameClazz = "";
        for ($i = 0; $i < count($listSameTime); $i++) {
            if ($i == (count($listSameTime) - 1)) {
                $listStrSameClazz = $listStrSameClazz . $listSameTime[$i];
            } else {
                $listStrSameClazz = $listStrSameClazz . $listSameTime[$i] . ", ";
            }
        }
        $listClazz = $this->getListTimeOfClassId($clazzCode);
        $result = array();
        foreach ($listClazz as $k => $v) {

            foreach ($v as $v1) {
                $value = [
                    'list_clazz_code' => $listStrSameClazz,
                    'name_subject' => $subject->name_subject,
                    'subject_code' => $subject->code_subject,
                    'week_day' => $v1['week_day'],
                    'startime' => $v1['start_time'],
                    'endtime' => $v1['end_time'],

                ];
                array_push($result, $value);
            }

        }

        return $result;

    }

    public function getAllScheduleAutoConvert()
    {
        $result1 = $this->getAllAutoSchedule();
        if (array_key_exists('1', $result1)) {
            $result = $result1['1'];
            $schedule = array();
            $i = 1;
            foreach ($result as $res) {
                $newSchedule = array();
                foreach ($res as $v) {
                    $newSchedule = array_merge($newSchedule, $this->getTimeSubjectClazzCode($v));
                }

                $colWeek = array_column($newSchedule, "week_day");
                $colStartime = array_column($newSchedule, "startime");
                array_multisort($colWeek, SORT_ASC, $colStartime, SORT_ASC, $newSchedule);
                $schedule += array($i => $newSchedule);
                $i = $i + 1;

            }
            return $schedule;

        } else {
            $result = $result1['0'];
            $schedule = array();
            $i = 1;
            foreach ($result as $key) {
                $newSchedule = array();
                $newSchedule = array_merge($newSchedule, $this->getTimeSubjectClazzCode($key));
                $schedule += array($i => $newSchedule);
                $i = $i + 1;
            }
            return $schedule;

        }

    }

}
