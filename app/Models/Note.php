<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    //use HasFactory;
    protected $table = "notes";
    protected $fillable = [
        'user_id',
        'title_note',
        'description',
        'startime',
        'endtime',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    

}
