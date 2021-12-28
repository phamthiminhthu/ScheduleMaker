<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clazz extends Model
{
    use HasFactory;

    protected $table = 'clazz';
    public $primaryKey = 'classID';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $fillable = [
        'id',
        'classID',
        'courseID',
        'teacherID',
        'startTime',
        'endTime',
        'thu',
    ];

    public function teacher()
    {
        return $this->belongstoMany(teacher::class);
    }

    public function schedule()
    {
        return $this->belongstoMany(schedule::class);
    }
}
