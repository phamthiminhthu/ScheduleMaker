<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $table = 'schedule';
    public $primaryKey = (['studentID','classID']);

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $fillable = [
        'studentID',
        'classID',
        'note',
        'create_time',
    ];

    public function student()
    {
        return $this->hasOne(student::class);
    }

    public function clazz()
    {
        return $this->belongstoMany(clazz::class);
    }
}
