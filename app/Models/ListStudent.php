<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListStudent extends Model
{
    use HasFactory;

    protected $table = 'list_student';
    public $primaryKey = (['studentID','classID']);

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $fillable = [
        'classID',
        'studentID',
    ];

    public function clazz()
    {
        return $this->hasOne(clazz::class);
    }

    public function student()
    {
        return $this->belongstoMany(student::class);
    }
}
