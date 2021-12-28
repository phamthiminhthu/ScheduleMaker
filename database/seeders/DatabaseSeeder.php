<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(users::class);
        $this->call(student::class);
        $this->call(teacher::class);    
        $this->call(course::class);
        $this->call(clazz::class);
        $this->call(list_student::class);
        $this->call(schedule::class);
    }
}
