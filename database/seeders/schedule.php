<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class schedule extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('schedule')->insert([
        //     ['studentID'=>'20184218', 'classID'=>'106000','note'=>'Lap trinh mang rat kho','created_time'=>'2021-12-20 6:20:19']
        // ]);

        $faker = Faker::create();
        foreach(range(1,140) as $value){
            DB::table('schedule')->insert([
                'studentID'=> $faker->unique()->numberBetween($min = 1001, $max = 1140),
                'classID'=>$faker->numberBetween($min = 1000001, $max = 1000015),
                'note'=>$faker->randomElement([
                    'khoa hoc rat bo ich, thay co vui tinh',
                    'deadline lien tuc',
                    'kinh khung khiep',
                    'bai tap vn rat nhieu',
                    'hom nay dep troi nhi?'
                ]),
                'created_time'=>$faker->dateTimeThisYear($max = 'now')


            ]);
        }
    }
}
