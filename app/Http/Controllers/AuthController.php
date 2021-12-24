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
            'name' => 'required|string',
            'emai' => 'required|string|unique:users,email',
            'password'=> 'required|string|confirmed'
        ]);
        $user = User::create(
            [
                'name' => $fields['name'],
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