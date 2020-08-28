<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function addon()
    {
        return $this->belongsTo(Addon::class);
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
    public function extras()
    {
        return $this->hasMany(ServiceExtra::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
