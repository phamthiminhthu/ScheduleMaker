<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->after('email_verified_at')->nullable();
            $table->date('birthday')->after('phone')->nullable();
            $table->string('gender')->after('birthday')->nullable();
            $table->string('education')->after('birthday')->default("Ha Noi University Techonlogy and Science");
            $table->string('avatar')->after('education')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('phone');
            $table->dropColumn('birthday');
            $table->dropColumn('gender');
            $table->dropColumn('education');
        });
    }
}
