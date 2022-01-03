<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClazzesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clazzes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject_id');
            $table->string('clazz_code');
            $table->string('clazz_code_sub');
            $table->string('name_clazz');
            $table->integer('quantily_student');
            $table->integer('week_day');
            $table->time('startime');
            $table->time('endtime');
            $table->string('buoi_trong_ngay');
            $table->foreign('subject_id')->references('code_subject')->on('subjects')->onDelete('cascade')->onUpdate('cascade');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clazzes');
    }
}
