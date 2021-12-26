<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;
use Faker\Provider\en_US\Company;

class course extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('course')->insert([
        //     ['courseID'=>'214052', 'courseName'=>'Lap trinh mang', 'tin_chi_diem'=>'2', 'tin_chi_hoc_phi'=>'4'],
        //     ['courseID'=>'214552', 'courseName'=>'Lap trinh web', 'tin_chi_diem'=>'4', 'tin_chi_hoc_phi'=>'4'],
        //     ['courseID'=>'214948', 'courseName'=>'Thuc tap doanh nghiep', 'tin_chi_diem'=>'1', 'tin_chi_hoc_phi'=>'1'],
        //     ['courseID'=>'214992', 'courseName'=>'Lap trinh cau truc', 'tin_chi_diem'=>'3', 'tin_chi_hoc_phi'=>'2']
        // ]);

        $faker = Faker::create();
        foreach(range(1,10) as $value){
            DB::table('course')->insert([
                'courseID'=> $faker->unique()->numberBetween($min = 100001, $max = 100010),
                'courseName'=>$faker->unique()->jobTitle,
                'tin_chi_diem'=>$faker->numberBetween($min = 2, $max = 5),
                'tin_chi_hoc_phi'=>$faker->numberBetween($min = 2, $max = 5)

            ]);
        }
    }
}
