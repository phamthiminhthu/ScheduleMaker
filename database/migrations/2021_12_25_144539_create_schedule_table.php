<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule', function (Blueprint $table) {
            $table->integer('studentID')->unsigned();
            $table->integer('classID')->unsigned();
            $table->string('note');
            $table->dateTime('created_time');
            $table->timestamps();

            $table->foreign('studentID')->references('studentID')->on('student')->onDelete('cascade');
            $table->foreign('classID')->references('classID')->on('clazz')->onDelete('cascade');          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedule');
    }
}
