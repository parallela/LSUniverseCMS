<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceExtra extends Model
{
    protected $fillable = [
      'name', 'description',
      'content', 'price', 'u_price'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
