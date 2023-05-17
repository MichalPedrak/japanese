<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function store(Request $request){


        // todo Validation, correct email, and password validation more than 6 charts and 1 number and special sign

        $user = User::where('email', '=', $request->input('email'))->first();
        if ($user === null) {
            User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

        } else {

            return json_encode([
                'status' => 'error',
                'message' => 'User exist',
            ]);



        }







    }

    public function create(Request $request){
        return Inertia::render('LoginView');
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email', 'password'))){
            return response([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        };

        $user = Auth::user();

//        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24);

        return \response([
            'message' => 'Success',
            'user' => Auth::user()
        ])->withCookie($cookie);
    }

    public function logout(){
        $cookie = Cookie::forget('jwt');

        return \response([
            'message' => 'sucess',
        ])->withCookie($cookie);
    }

    public function user(){
        return Auth::user();
    }


}
