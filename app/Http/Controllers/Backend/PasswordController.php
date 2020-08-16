<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class PasswordController extends Controller
{
    /**
     * forget_password_generate
     *
     * @param  mixed $request
     * @return void
     */
    public function forget_password_generate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $email = $request->only('email');
        $user = User::where('email', $email)->first();
        if($user === null) {
            return response()->json(['error'=>"User not found"], 400);
        }
        User::createForgetPasswordToken($user->id);

        return response()->json(['message' => 'valid']);
    }

    /**
     * forget
     *
     * @param  mixed $request
     * @return void
     */
    public function forget_valid(Request $request)
    {
        $token_input = $request->only('token');
        $token = DB::table('forget_passwords')->where('reset_token', $token_input)->first();
        if ($token !== null) {
            return response()->json(['message' => 'token_valid']);
        }
        return response()->json(['error' => 'invalid_token'], 400);
    }

    /**
     * change_forget_password
     *
     * @param  mixed $request
     * @return void
     */
    public function change_forget_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'password' => ['required', 'regex:/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/'],
            're_password' => ['required', 'same:password'],
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $userData = User::userByForgetPasswordToken($request->input('token'))->first();

        if($userData === null) {
            return response()->json(['error'=>'invalid user, or token'], 400);
        }

        if (Hash::check($request->input('password'), $userData->password)) {
            return response()->json(['error' => 'Password must be not the same as previous password'], 400);
        }

        User::userByForgetPasswordToken($request->input('token'))->update([
            'users.password' => Hash::make($request->input('password')),
        ]);
        DB::table('forget_passwords')->where('reset_token', $request->input('token'))->delete();

        return response()->json(['message' => 'success'], 200);
    }
}
