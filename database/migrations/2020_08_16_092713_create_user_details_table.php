<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('street_address_1')->nullable();
            $table->string('street_address_2')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('city')->nullable();
            $table->string('region')->nullable();
            $table->string('zipcode')->nullable();
            $table->boolean('mailing_list')->default(0);
        });
        Schema::table('user_details', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
