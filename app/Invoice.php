<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    // TODO: Research about invoices.
    protected $fillable = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
