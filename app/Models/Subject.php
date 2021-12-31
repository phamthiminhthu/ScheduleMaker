<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //use HasFactory;

    protected $fillable =[
         'code_subject',
         'name_subject',
         'amount_subject',
         'amount_money',
         'score',
         'status'
        
    ];
}
