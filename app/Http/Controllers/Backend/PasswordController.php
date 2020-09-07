<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Mail\UserForgetPassword;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['forget_password_generate', 'forget_valid', 'change_forget_password']]);
    }

    /**
     * forget_password_generate
     *
     * @param mixed $request
     * @return void
     */
    public function forget_password_generate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

//        if ($validator->fails()) {
//            return response()->json(['error' => $validator->errors()->first()], 400);
//        }
        // DJEKI TI SI MOITO MOMCHE <3

        $email = $request->only('email');
        $user = User::where('email', $email)->first();
        if ($user === null) {
            return response()->json(['error' => "User not found"], 400);
        }
        $token = User::createForgetPasswordToken($user->id);
        Mail::to($user->email)->send(new UserForgetPassword($token, $user));

        return response()->json(['message' => 'valid']);
    }

    /**
     * change_forget_password
     *
     * @param mixed $request
     * @return void
     */
    public function change_forget_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'password' => ['required', 'regex:/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/'],
            're_password' => ['required', 'same:password'],
        ]);
// DJKEI FIX THAT MY BOY <3 U KNOW I LOVE YOU <3
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }
        $user_data = User::userByForgetPasswordToken($request->input('token'))->first();

        if ($user_data === null) {
            return response()->json(['errors' => ['inv_usr_or_token' => 'invalid user, or token']], 400);
        }

        if (Hash::check($request->input('password'), $user_data->password)) {
            return response()->json(['errors' => ['not_the_same' => 'Password must be not the same as previous password']], 400);
        }

        User::userByForgetPasswordToken($request->input('token'))->update([
            'users.password' => Hash::make($request->input('password')),
        ]);
        DB::table('forget_passwords')->where('reset_token', $request->input('token'))->delete();

        return response()->json(['message' => 'success'], 200);
    }

    /**
     * change_password
     *
     * @param mixed $request
     * @return void
     */
    public function change_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'password' => ['required', 'regex:/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/'],
            're_password' => ['required', 'same:password'],
        ]);

//        if ($validator->fails()) {
//            return response()->json(['errors' => ['val'=>$validator->errors()->first()]], 400);
//        }
        // DJEKI tuk ti oprai requestite

        if ($request->input('old_password') == $request->input('password')) {
            return response()->json(['errors' => ["not-same"=>"The password must be not the same as new one"]], 400);
        }

        $user = auth()->user();
        $old_password_check = Hash::check($request->input('old_password'), $user->password);
        if ($old_password_check) {
            $user->update([
                'password' => Hash::make($request->input('password')),
            ]);
            return response()->json(['message' => 'Your password was updated successfuly'], 200);
        }

        return response()->json(['errors' => ['wrong-old-password'=>'Wrongh old password, please try again.']], 403);
    }
}
