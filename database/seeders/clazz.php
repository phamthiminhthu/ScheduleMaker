<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class clazz extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('clazz')->insert([
        //     ['classID'=>'106000', 'courseID'=>'214052','teacherID'=>'99999999','startTime'=>'2022-01-01 8:00:00','endTime'=>'2022-01-01 10:00:00'],
        //     ['classID'=>'106001', 'courseID'=>'214052','teacherID'=>'88888888','startTime'=>'2022-01-01 8:00:00','endTime'=>'2022-01-01 10:00:00']
        // ]);

        $faker = Faker::create();
        foreach(range(1,15) as $value){
            DB::table('clazz')->insert([
                'classID'=> $faker->unique()->numberBetween($min = 1000001, $max = 1000015),
                'courseID'=>$faker->numberBetween($min = 100001, $max = 100010),
                'teacherID'=>$faker->numberBetween($min = 10001, $max = 10010),
                'startTime'=>$faker->dateTimeThisYear($max = 'now'),
                'endTime'=>$faker->dateTimeThisYear($max = 'now'),
                'thu'=>$faker->randomElement([
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                ]),

            ]);
        }
    }
}
