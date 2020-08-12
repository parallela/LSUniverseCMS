<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserVerification extends Model
{    
    /**
     * What to be filled in database
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'token'
    ];
    
    /**
     * Relation belong to user
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
