<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
}
