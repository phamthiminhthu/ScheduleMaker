<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illmuinate\Http\Response;
use Illmuinate\Http\Facades\Hash;

class AuthController extends Controller
{
    //

    public function register(Request $request){
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password'=> 'required|string'
        ]);
        $user = User::create(
            [
                'firstName' => $fields['firstName'],
                'lastName' => $fields['lastName'],
                'email' => $fields['email'],
                'password' => bcrypt($fields['password'])
            ]);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=> $user,
            'token'=>$token
        ];
        return response($response, 201);
    
    }

    
}