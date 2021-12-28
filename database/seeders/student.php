<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class student extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('student')->insert([
        //     ['userID'=>'10000000', 'studentID'=>'20184218'],
        //     ['userID'=>'10000002', 'studentID'=>'20182222'],
        //     ['userID'=>'10000003', 'studentID'=>'20183333']
        // ]);

        $faker = Faker::create();
        foreach(range(1,140) as $value){
            DB::table('student')->insert([
                'studentID'=> $faker->unique()->numberBetween($min = 1001, $max = 1140),
                'userID'=>$faker->unique()->numberBetween($min = 1, $max = 140)

            ]);
        }
    }
}
