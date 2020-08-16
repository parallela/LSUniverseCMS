<?php

namespace App;

use Exception;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
        'verified', 'balance', 'isAdmin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'verified',
    ];

    /**
     * getJWTCustomClaims
     *
     * @return mixed
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * getJWTIdentifier
     *
     * @return array
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * RelationShip between user, and user activation token
     *
     * @return void
     */
    public function verifyToken()
    {
        return $this->hasOne(UserVerification::class);
    }

    /**
     * Helper for creating user forget password token
     *
     * @param  int $user_id
     * @return void
     */
    public static function createForgetPasswordToken($user_id)
    {
        if ($user_id === null || $user_id < 1) {
            throw new Exception('Invalid user_id on createForgetPasswordToken function');
        }

        $existed_data = DB::table('forget_passwords')->where('user_id', $user_id);

        if ($existed_data !== null) {
            $existed_data->delete();
        }

        $create_token = DB::table('forget_passwords')->insert(
            [
                'user_id' => $user_id,
                'reset_token' => md5(time() . sha1($user_id)),
            ]
        );

        return $create_token;
    }

    /**
     * userByForgetPasswordToken
     *
     * @param string $token
     * @return object
     */
    public static function userByForgetPasswordToken($token)
    {

        $user = DB::table('forget_passwords')
            ->where('reset_token', $token)
            ->join('users', 'users.id', '=', 'forget_passwords.user_id');

        if ($token === null) {
            throw new Exception('Invalid token on userByForgetPasswordToken function');
        }

        if ($user === null) {
            throw new Exception('User invalid on userByForgetPasswordToken function');
        }

        return $user;
    }
}
