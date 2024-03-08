<?php

namespace App\Http\Controllers;
use App\Models\Cards;
use App\Models\Groups;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupsController extends Controller
{

    public function index(){

        return Inertia::render('CardsView');

    }


    public function getGroups(){

        return Groups::query()->orderBy('id')->get();

    }


    public function store(Request $request){

        $group = Groups::create([
            'title' => $request['title'],
            'level' => 'begginer',
        ]);



    }


    public function update(Request $request, $id = null)
    {
        $group = Groups::find($id);


        $group->title = $request['title'];
        $group->level = 'begg';

        $group->save();

        return $group;

    }

    public function destroy($id = null){

        return Groups::destroy($id);
    }

}
