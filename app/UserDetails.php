<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    protected $fillable = [
        'street_address_1',
        'street_address_2',
        'phone_number',
        'city',
        'region',
        'zipcode',
        'mailing_list',
        'user_id',
        'security_question',
        'security_question_answer'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
