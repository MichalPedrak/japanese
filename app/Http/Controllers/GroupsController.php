<?php

namespace App\Http\Controllers;
use App\Models\Cards;
use App\Models\Groups;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupsController extends Controller
{

    public function index(){


        return Inertia::render('CardsView', [
           'groups' => Groups::query()->orderByDesc('id')->get()
        ]);

    }

    public function store(Request $request){

        Groups::create([
            'title' => $request['title'],
            'level' => 'begginer',
        ]);

    }



}
