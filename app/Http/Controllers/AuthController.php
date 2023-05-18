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

        $messages = [
            'name.required' => 'Imię i nazwisko jest wymagane',
            'email.email' => 'Wprowadź prawidłowy adres email',
            'email.unique' => 'Podany adres email jest już zajęty',
            'password.regex' => 'Hasło musi zawierać jedną dużą literę, liczbę oraz znak specialny',
            'password.min' => 'Hasło musi mieć conajmniej 6 znaków'
        ];

        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|unique:users,email|email',
            'password' => [
                'required',
                'min:6',
                'regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/',
//                'confirmed'
            ]
        ], $messages);

        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);

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
