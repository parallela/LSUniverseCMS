<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    public $dates = [
        'expire_at'
    ];

    protected $fillable = [
        'code', 'expire_at', 'discount_percent'
    ];


    /**
     * @param $value
     * @return bool
     */
    static public function check($value)
    {
        $code = self::where('code', $value)->first();
        if (empty($code)) {
            return false;
        }
        return true;
    }

    /**
     * @param $value
     * @return bool
     */
    static public function is_expire($value)
    {
        $code = self::where('code', $value)->first();
        if (!empty($code)) {
            if ($code->expire_at->isFuture()) {
                return false;
            }
        } else {
            return true;
        }

        return true;
    }

}
