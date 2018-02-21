<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Game;
use App\Recipe;
use App\CookingWebsite;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes = Recipe::select('title', 'description', 'link')->get();
        $cooking_websites = CookingWebsite::select('name', 'link')->get();
        $games = Game::select('id', 'title', 'description', 'link')->get();

        return view('index', compact('recipes', 'cooking_websites', 'games'));
    }

    public function createWebsite()
    {
        /*$this->validate(request(), [
            'name' => 'required',
            'link' => 'required'
        ]);*/

        //$cookingWebsite = CookingWebsite::create(request(['name', 'link']));
        $cookingWebsite = CookingWebsite::create(request(['name', 'link']));
        return response()->json($cookingWebsite);
    }

    public function createRecipe()
    {
        /*$this->validate(request(), [
            'title' => 'required',
            'description' => 'required',
            'link' => 'required'
        ]);*/

        Recipe::create(request(['title', 'description', 'link']));
    }

    //There is zero security here, I gave up with csrf
    public function createGame()
    {
        //I didn't need to use Request $request, $request->id, etc...
        //I dunno if it was really neccesary...
        
        $new_game = Game::create(request(['title', 'description', 'link']));
        return response()->json($new_game);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroyGame(Request $request)
    {
        Game::find($request->id)->delete();
    }
}
