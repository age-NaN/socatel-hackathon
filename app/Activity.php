<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = ['name', 'description'];

    public function actions(){
        $this->belongsToMany(Action::class);
    }
}
