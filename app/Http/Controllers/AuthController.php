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
            'name.required' => 'Nazwa użytkownika jest wymagane',
            'name.unique' => 'Podana nazwa użytkownika jest już zajęta',
            'email.email' => 'Wprowadź prawidłowy adres email',
            'email.unique' => 'Podany adres email jest już zajęty',
            'password.regex' => 'Hasło musi zawierać jedną dużą literę, liczbę oraz znak specialny',
            'password.min' => 'Hasło musi mieć conajmniej 6 znaków'
        ];

        $validated = $request->validate([
            'name' => 'required|unique:users,name|max:255',
            'email' => 'required|unique:users,email|email',
            'password' => [
                'required',
                'min:6',
                'regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/',

            ]
        ], $messages);

        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);

    }

    public function create(Request $request){
        return Inertia::render('LoginView');
    }

    public function login(Request $request){

        $login = $request->input('email');
        $user = User::where('email', $login)->orWhere('name', $login)->first();

        if (!$user) {
            return response([
                'errors' => 'Nieprawidłowe dane ',
            ], Response::HTTP_UNAUTHORIZED);
        }

        if (Auth::attempt(['email' => $user->email, 'password' => $request->password]) ||
            Auth::attempt(['name' => $user->email, 'password' => $request->password])) {
            Auth::loginUsingId($user->id);

        } else {
            return response([
                'errors' => 'Nieprawidłowe dane ',
            ], Response::HTTP_UNAUTHORIZED);
        }


        return \response([
            'status' => 'ok',
            'message' => 'Success',
            'user' => [
                'id' => Auth::user()->id,
                'email' => Auth::user()->email,
                'name' => Auth::user()->name,
            ]
        ]);
    }

    public function logout(){
        auth()->logout();

        return [
            "status" => 'ok',
            'message' => 'Zostałeś wylogowany',
        ];
//
//        Inertia::render('/login', [
//            "status" => 'ok',
//            'message' => 'Zostałeś wylogowany',
//        ]);
    }

    public function user(){
        return Auth::user();
    }


}
