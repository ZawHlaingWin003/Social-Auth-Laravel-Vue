<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\ApiResponseHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function callback($provider)
    {
        try {
            DB::beginTransaction();

            $socialUser = Socialite::driver($provider)->stateless()->user();

            $user = User::whereEmail($socialUser->email)->first();

            if (!$user) {
                $user = $this->createUser($socialUser, $provider);
            } elseif ($user->provider == 0) {
                DB::rollBack();
                return ApiResponseHelper::fail(400, 'User already exists!');
            } else {
                $user = $this->updateUser($user, $socialUser, $provider);
            }

            $token = $user->createToken('API_TOKEN')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];

            DB::commit();

            return ApiResponseHelper::success($response, 201);
        } catch (Exception $e) {
            DB::rollBack();
            return ApiResponseHelper::fail(401, $e->getMessage());
        }
    }

    public function createUser($socialUser, $provider)
    {
        $user = User::create([
            'name' => $socialUser->name,
            'email' => $socialUser->email,
            'profile' => $socialUser->avatar,
            'password' => Str::random(64),
            "{$provider}_id" => $socialUser->id,
            'provider' => 1
        ]);
        $user->assignRole('AppUser');

        return $user;
    }

    public function updateUser($user, $socialUser, $provider)
    {
        $user->update([
            'name' => $socialUser->name,
            'profile' => $socialUser->avatar,
            "{$provider}_id" => $socialUser->id
        ]);

        return $user;
    }
}
