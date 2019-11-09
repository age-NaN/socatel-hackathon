<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actions extends Model
{
    protected $fillable = ['name', 'description'];

    public function activities(){
        $this->belongsToMany(Activity::class);
    }
}
