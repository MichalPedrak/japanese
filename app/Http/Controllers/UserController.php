<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController
{
    public function index(){
        return Inertia::render('UsersView');
    }
}
