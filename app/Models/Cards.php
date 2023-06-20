<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cards extends Model
{
    use HasFactory;

    const POSITION_GAP = 60000;

    protected $guarded = [];

    public function groups(){ // hasOne hasMany belongsTo blongsToMany
        return $this->belongsTo(Groups::class);
    }
    public function users(){ // hasOne hasMany belongsTo blongsToMany
        return $this->belongsTo(User::class);
    }

    public static function booted ()
    {
        static::creating (function($model) {
            $model->position = self::query()->orderByDesc('position')->first()?->position + self::POSITION_GAP;
        });
    }

//    public function cardsStatus(){ // hasOne hasMany belongsTo blongsToMany
//        return $this->hasMany(Cards::class);
//    }
}
