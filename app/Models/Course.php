<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = 'course';
    public $primaryKey = 'courseID';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $fillable = [
        'id',
        'courseID',
        'courseName',
        'tin_chi_diem',
        'tin_chi_hoc_phi',

    ];

    public function clazz()
    {
        return $this->hasMany(clazz::class);
    }
}
