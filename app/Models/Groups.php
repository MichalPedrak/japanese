<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groups extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users(){ // hasOne hasMany belongsTo blongsToMany
        return $this->belongsToMany(User::class);
    }


}
