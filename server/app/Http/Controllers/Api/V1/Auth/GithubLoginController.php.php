<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GithubLoginController extends Controller
{
    public function callback()
    {
        try {
            $githubUser = Socialite::driver('github')->stateless()->user();
            return response()->json([
                'user' => $githubUser
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
