<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clazz extends Model
{
    //use HasFactory;
    protected $table = "clazzes";
    protected $fillable = [
        'subject_id',
        'clazz_code',
        'clazz_code_sub',
        'name_clazz',
        'quantily_student',
        'week_day',
        'startime',
        'endtime',
        'buoi_trong_ngay'
    ];

    public function subject(){
        return $this->belongsTo(Subject::class);
    }
}
