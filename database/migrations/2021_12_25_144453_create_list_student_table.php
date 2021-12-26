<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_student', function (Blueprint $table) {
            $table->integer('studentID')->unsigned();
            $table->integer('classID')->unsigned();
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
        Schema::dropIfExists('list_student');
    }
}
