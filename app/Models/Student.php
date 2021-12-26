<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'student';
    public $primaryKey = 'studentID';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $fillable = [
        'studentID',
        'userID',
    ];

    public function schedule()
    {
        return $this->hasOne(schedule::class);
    }

    public function list_student()
    {
        return $this->belongstoMany(list_student::class);
    }

}
