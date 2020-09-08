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
        'password', 'verified', 'isAdmin'
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
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function details()
    {
        return $this->hasOne(UserDetails::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ticket_answers()
    {
        return $this->hasMany(TicketAnswer::class);
    }

    public function categories()
    {
        return $this>$this->hasMany(Category::class);
    }
    /**
     * Helper for creating user forget password token
     *
     * @param int $user_id
     * @return object
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

        $token_string = md5(time() . sha1($user_id));
        $create_token = DB::table('forget_passwords')->insert(
            [
                'user_id' => $user_id,
                'reset_token' => $token_string,
            ]
        );

        return $token_string;
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
            ->join('user', 'user.id', '=', 'forget_passwords.user_id');

        if ($token === null) {
            throw new Exception('Invalid token on userByForgetPasswordToken function');
        }

        if ($user === null) {
            throw new Exception('User invalid on userByForgetPasswordToken function');
        }

        return $user;
    }
}
