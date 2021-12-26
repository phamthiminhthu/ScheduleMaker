<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class list_student extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('list_student')->insert([
        //     ['studentID'=>'20184218','classID'=>'106000'],
        //     ['studentID'=>'20182222','classID'=>'106000'],
        //     ['studentID'=>'20183333','classID'=>'106000']
        // ]);

        $faker = Faker::create();
        foreach(range(1,140) as $value){
            DB::table('list_student')->insert([
                'studentID'=> $faker->unique()->numberBetween($min = 1001, $max = 1140),
                'classID'=>$faker->numberBetween($min = 1000001, $max = 1000015)

            ]);
        }
    }
}
