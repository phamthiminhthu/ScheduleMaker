<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Str;
use Faker\Factory as Faker;
use Faker\Provider\Base;
use Faker\Provider\en_US\Person;

class users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('users')->insert([
        //     ['userID'=>'10000000', 'firstName'=>'Tuan','secondName'=>'Doan','gender'=>'Male','phoneNumber'=>'0943967293','dateOfbirth'=>'2000-03-14' ,'email'=>'tuanpeterkill@gmail.com','accountType'=>'tuan184218','passwordHash'=>'tuan184218'],
        //     ['userID'=>'10000001', 'firstName'=>'Binh','secondName'=>'Nguyen','gender'=>'Male','phoneNumber'=>'0941111111', 'dateOfbirth'=>'2000-03-13', 'email'=>'binhnguyen@gmail.com','accountType'=>'binh0000','passwordHash'=>'binh0000'],
        //     ['userID'=>'10000002', 'firstName'=>'Thu','secondName'=>'Pham','gender'=>'Female','phoneNumber'=>'0942222222','dateOfbirth'=>'2000-03-12' ,'email'=>'thupham@gmail.com','accountType'=>'thu1111','passwordHash'=>'thu1111'],
        //     ['userID'=>'10000003', 'firstName'=>'Long','secondName'=>'Hoang','gender'=>'Male','phoneNumber'=>'0943333333','dateOfbirth'=>'2000-03-11' ,'email'=>'longhoang@gmail.com','accountType'=>'long2222','passwordHash'=>'long2222'],
        //     ['userID'=>'10000004', 'firstName'=>'Phong','secondName'=>'Mai','gender'=>'Male','phoneNumber'=>'0944444444','dateOfbirth'=>'2000-03-10' ,'email'=>'phongmai@gmail.com','accountType'=>'phong3333','passwordHash'=>'phong3333']
        // ]);

        $faker = Faker::create();
        foreach(range(1,150) as $value){
            DB::table('users')->insert([
                'userID'=> $faker->unique()->numberBetween($min = 1, $max = 150),
                'firstName'=>$faker->firstName,
                'lastName'=>$faker->lastName,
                'gender'=>$faker->randomElement([
                    'male',
                    'female',
                    'others'
                ]),
                'phoneNumber'=>$faker->e164PhoneNumber,
                'dateOfbirth'=>$faker->dateTimeThisDecade   ->format('Y-m-d'),
                'email'=>$faker->unique()->freeEmail,
                'accountType'=>$faker->randomElement([
                    'admin',
                    'user'
                ]),
                'password'=>$faker->password
                

            ]);
        }


    }
}
