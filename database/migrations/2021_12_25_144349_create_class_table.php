<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clazz', function (Blueprint $table) {
                $table->increments('classID');
                $table->integer('courseID')->unsigned();
                $table->integer('teacherID')->unsigned();;
                $table->dateTime('startTime');
                $table->dateTime('endTime');
                $table->integer('thu');
                $table->timestamps();

                $table->foreign('courseID')->references('courseID')->on('course')->onDelete('cascade');
                $table->foreign('teacherID')->references('teacherID')->on('teacher')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clazz');
    }
}
