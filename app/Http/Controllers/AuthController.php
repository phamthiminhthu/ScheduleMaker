<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illmuinate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $user = User::create(
            [
                'name' => $fields['name'],
                'email' => $fields['email'],
                'password' => bcrypt($fields['password']),
            ]);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'status' => 200,
            'user' => $user,
            'token' => $token,
            'message' => "Registered Successfully",
        ];
        return response($response, 201);

    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $fields['email'])->first();
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'status' => 401,
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

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'status' => "200",
            'message' => "Logged out",
        ];
    }

    public function getDataUser(Request $request)
    {
        return $request->user();
    }

    public function updateUser(Request $request)
    {

        $request->validate([
            'name' => 'string',
            'email' => 'string',
            'phone' => 'string|max:10|nullable',
            'birthday' => 'date_format:Y-m-d|nullable',
            'gender' => 'string|nullable',
            'education' => 'string|nullable',
        ]);

        $user = $request->user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->birthday = $request->birthday;
        $user->phone = $request->phone;
        $user->gender = $request->gender;
        $user->education = $request->education;
        $user->save();
        return response()->json([
            'status' => 200,
            'data' => 'User updated',
        ]);

    }

    public function changePassword(Request $request)
    {
        $fields = $request->validate([
            'old_password' => 'required|string|min:6',
            'password' => 'required|string|min:6',
            'confirm_password' => 'required|string|min:6|same:password',

        ]);

        $user = $request->user();
        if (Hash::check($fields['old_password'], $user->password)) {
            $user->update([
                'password' => bcrypt($fields['password']),
            ]);
            return response()->json([
                'message' => "Password change successfully",
                'status' => 200,
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Old password does not matched',
            ], 400);
        }

    }

    public function uploadImage(Request $request)
    {
        $user = User::findOrFail(Auth::user()->id)->update(['avatar' => $request->imageURL]);
        return response()->json([
            'message' => 'successfully upload image'
        ]);
      
    }

}
