<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class teacher extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('teacher')->insert([
        //     ['teacherID'=>'99999999', 'userID'=>'10000001'],
        //     ['teacherID'=>'88888888', 'userID'=>'10000004']
        // ]);

        $faker = Faker::create();
        foreach(range(1,10) as $value){
            DB::table('teacher')->insert([
                'teacherID'=> $faker->unique()->numberBetween($min = 10001, $max = 10010),
                'userID'=>$faker->unique()->numberBetween($min = 141, $max = 150)

            ]);
        }

    }
}
