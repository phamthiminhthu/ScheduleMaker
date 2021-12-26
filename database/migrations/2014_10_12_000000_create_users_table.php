<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('userID');
            $table->string('firstName');
            $table->string('lastName');
            $table->string('gender')->nullable();
            $table->date('dateOfbirth')->nullable();
            $table->string('phoneNumber')->unique()->nullable();
            $table->string('email')->unique();
            $table->string('active')->default('0');
            $table->string('accountType')->nullable();
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
