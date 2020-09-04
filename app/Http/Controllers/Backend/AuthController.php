<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth;
use App\Http\Requests\Register;
use App\Mail\UserVerify;
use App\User;
use App\UserVerification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{
    /**
     * Create instance of AuthController
     * Make middleware ignore login and register Routes
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'verify']]);
    }

    /**
     * Register the user with requested credentials
     *
     * @param mixed $request
     * @return void
     */
    public function register(Register $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'isAdmin' => 0,
            'balance' => 0.00,
            'verified' => 0,
        ]);

        if ($user) {
            UserVerification::create([
                'user_id' => $user->id,
                'token' => md5("$user->id $user->email" . sha1(time())),
            ]);

            Mail::to($user->email)->send(new UserVerify($user));

            return response()->json(['message' => 'Created'], 201);
        }

        return response()->json(['errors' => ['auth' => 'Failed']], 400);

    }

    /**
     * Get JWT token via given credentials
     *
     * @return mixed
     */
    public function login(Auth $request)
    {
        $credentials = request(['email', 'password']);
        $verified = User::where('email', $credentials['email'])->first();

        if (empty($verified)) {
            return response()->json(["errors" => ["auth" => "We can't find that user, Do you try to register?"]], 403);
        }

        if ($verified->verified == 1) {
            if (!$token = auth('api')->attempt($credentials)) {
                return response()->json(['errors' => ['auth' => 'Invalid Credentials']], 400);
            }
        } else {
            return response()->json(['errors' => ['auth' => 'Not verified']], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Return user information from database
     *
     * @return void
     */
    public function me()
    {
        $user = User::with('details')->find(auth()->id());
        return response()->json($user);
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\Response;
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfuly']);
    }

    /**
     * respondWithToken
     *
     * @param mixed $token
     * @return void
     */
    private function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
        ]);
    }

    /**
     * Refresh user token
     *
     * @return void
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

}
