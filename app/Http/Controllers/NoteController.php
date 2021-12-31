<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{

    public function getAllNote(){
         $notes = Note::where('user_id', Auth::user()->id)->get();
        return response()->json([
            'note'=>$notes,
            'status'=>200
        ]);
    }

    public function getNote($id){
        $note = Note::findOrFail($id);
        return response()->json([
            'note'=> $note,
            'status'=>200,
            'message'=> 'Find Successfully'
        ]);
    }

    public function createNote(Request $request)
    {
        $request->validate([
            'title_note' => 'required',
            'description' => 'required|max:255',
            'startime' => 'required|date_format:Y-m-d H:i:s',
            'endtime' => 'required|date_format:Y-m-d H:i:s',
        ]);

        $note = new Note([
            'user_id' => Auth::user()->id,
            'title_note' => $request->title_note,
            'description' => $request->description,
            'startime' => $request->startime,
            'endtime' => $request->endtime,
        ]);
        $note->save();

        return response()->json([
            'note' => $note,
            'message' => "Note created successfully",
            'status' => 200,
        ]);

    }

    public function deleteNote($id)
    {
        $note = Note::findOrFail($id);
        $note->delete();
        return response()->json([
            'message' => 'Note deleted successfully',
            'status' => 200,
        ]);
    }

    public function updateNote(Request $request, $id)
    {
        $request->validate([
            'title_note' => 'required',
            'description' => 'required|max:255',
            'startime' => 'required|date_format:Y-m-d H:i:s',
            'endtime' => 'required|date_format:Y-m-d H:i:s',
        ]);

        $note = Note::findOrFail($id);
        $note->title_note = $request->title_note;
        $note->description = $request->description;
        $note->startime = $request->startime;
        $note->endtime = $request->endtime;
        $note->save();
        return response()->json([
            'note' => $note,
            'message' => 'Note update successfully',
            'status' => 200,
        ]);
    }

    public function getIdMaxEvent(){
        $note = Note::max('id');
        $result = Note::findOrFail($note);
        return response()->json([
            'note'=>  $result,
            'idMax' => $note,
            'status'=>200
        ]);
    }
}
