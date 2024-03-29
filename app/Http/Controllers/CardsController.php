<?php

namespace App\Http\Controllers;

use App\Http\Resources\CardsResource;
use App\Models\Cards;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

//use Illuminate\Support\Facades\DB;

class CardsController extends Controller
{
    public function index($id = null)
    {


        if (!empty($id)) {
            return Cards::with('groups')->orderByDesc('position')->where('group_id', '=', $id)->get();
        }

        return Cards::with('groups')->orderByDesc('id')->get();
//        return DB::table('cards')->orderBy('id')->cursorPaginate(2);

    }

    public function cards($id = null)
    {

//
//        if (!empty($id)) {
//            return Cards::with('groups')->orderByDesc('position')->where('group_id', '=', $id)->get();
//        }

        $cards = CardsResource::collection(Cards::with('groups')->orderByDesc('position')->where('group_id', '=', $id)->get());
//        $cardCollection = Collection::make($cards);
//
//        foreach ($cardCollection as $card){
//            dd($card->original);
//        }
//        dd(CardsResource::collection(Cards::with('groups')->orderByDesc('position')->where('group_id', '=', $id)->get()));

        //

        return Inertia('SingleCard', [
            'cards' => $cards
        ]);
//        return DB::table('cards')->orderBy('id')->cursorPaginate(2);
    }

    public function single($id = null)
    {


//        return Cards::all()->where('id', '=', $id)->get();
        return DB::table('cards')->where('id', '=', $id)->get();

    }

    public function store(Request $request)
    {


        return Cards::create([
            'content' => $request['content'],
            'group_id' => $request['group_id'],
            'content_example' => $request['content_example'],
            'definition' => $request['definition'],
            'definition_example' => $request['definition_example'],
        ]);

    }

    public function update(Request $request, $id = null)
    {
        $card = Cards::find($id);


        $card->content = $request['content'];
        $card->content_example = $request['content_example'];
        $card->definition = $request['definition'];
        $card->definition_example = $request['definition_example'];
        $card->save();

        return $card;

    }

    public function destroy($id = null)
    {


        return Cards::destroy($id);
    }

    public function move(Request $request, $id = null)
    {

        $request->validate([
            'position' => ['required', 'numeric']
        ]);


        $card = Cards::find($id);


        $card->position = $request['position'];

        $card->save();

        if ($card->position < 100 or $card->position > 100000000) {
        DB::statement("SET @previousPosition := 0");
            DB::table('cards')
                ->where('group_id', $card->group_id)
                ->orderBy('position')
                ->update([
                    'position' => DB::raw('@previousPosition := @previousPosition + 60000')
                ]);


            return $card;


        }


    }

    public function importCards(Request $request){

        $cards = json_decode($request['import'], true);

        foreach(array_reverse($cards) as $card){

        Cards::create([
            'group_id' => $request['group_id'],
            'content' => $card[2],
            'content_example' => $card[3],
            'definition' => $card[0],
            'definition_example' => $card[1],
        ]);
        }


    }
}

