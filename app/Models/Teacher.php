<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $table = 'teacher';
    public $primaryKey = 'teacherID';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'teacherID',
        'userID',
    ];

    public function user()
    {
        return $this->hasOne(user::class);
    }

    public function clazz()
    {
        return $this->belongstoMany(clazz::class);
    }
}
