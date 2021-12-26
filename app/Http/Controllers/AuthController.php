<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illmuinate\Http\Response;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    

    public function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password'=> 'required|string|min:6|confirmed',
        ]);
        $user = User::create(
            [
                'name' => $fields['name'],
                'email' => $fields['email'],
                'password' => bcrypt($fields['password'])
            ]);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => 200,
            'user'=> $user,
            'token'=>$token,
            'message'=> "Registered Successfully",
        ];
        return response($response, 201);
    
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();
        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response([
                'status'=> 401,
                'message' => 'Email của bạn hoặc mật khẩu không đúng, vui lòng thử lại',
            ], 401);
        }
        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'status' => 200,
            'user' => $user,
            'token' => $token,
            'message' => 'Logged in successfully',
        ];
        return response($response, 201);
    }

}