<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = User::all();
        return response()->json(['data' => $users]);
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
        return $id?User::find($id):User::all();
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
        $user = User::find($id);
        $user->firstName = $request->firstName;
        $user->lastName = $request->lastName;
        $user->email = $request->email;
        $user->dateOfbirth = $request->dateOfbirth;
        $user->gender = $request->gender;
        $user->phoneNumber = $request->phoneNumber;
        $user->accountType = $request->accountType;
        $user->active = $request->active;
        $user->password = $request->password;
        $result = $user->save();

        // if($result){
        //     return ["Result"=>"Data has been updated"];
        // } else {
        //     return ["Result"=>"Data update failed"];
        // }

        return response()->json([
            'code' => 203,
            'data' => $user
        ], status: 203);
    }

     /**
     * Search for a name
     *
     * @param  str  $firstName
     * @return \Illuminate\Http\Response
     */
    public function search($firstName)
    {
        //
        return User::where('firstName', 'like', '%'.$firstName.'%')->get();
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
         
        $user = User::find($id);
        $result = $user->delete();
                
        // if($result){
        //     return ["Result"=>"Data has been deleted"];
        // } else {
        //     return ["Result"=>"Data delete failed"];
        // }
        
        return response()->json([
            'code' => 204,
            'message' => "Data has been deleted"
        ], status: 204);
    }
}
