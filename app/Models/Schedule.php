<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    //use HasFactory;
    protected $table="schedules";
    protected $fillable = [
        'user_id',
        'list_subject_code',
        'list_id_class'
    ];
    
    public function user(){
        return $this->belongsTo(User::class);
    }
        
    
}
