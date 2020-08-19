<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\UserVerification;

class VerificationController extends Controller
{        

    /**
     * Verify user by email
     *
     * @param  mixed $token
     * @return void
     */
    public function verify($token)
    {
        $data = UserVerification::where('token', $token)->first();
        if ($data) {
            $data->user()->update([
                'verified' => '1',
            ]);
            $data->delete();
        } else {
            return response()->json(['error'=>'Invalid validation token'], 400);
        }

        return response()->json(['message' => 'Verified']);
    }
}
