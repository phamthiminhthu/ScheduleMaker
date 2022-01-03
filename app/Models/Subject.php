<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //use HasFactory;
    protected $primaryKey = 'code_subject';
    public $incrementing = false;
    protected $keyType = 'string';
    
    protected $fillable =[
         'code_subject',
         'amount_subject',
         'name_subject',
         'type_subject',
         'week_learn',
         'semester'
        
    ];

    public function clazzes(){
        return $this->hasMany(Clazz::class);
    }
}
