<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('airdrops', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->index();
            $table->integer('project_id')->index();
            $table->integer('total_tokens');
            $table->integer('reward_amount');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('reserve_total_tokens');
            $table->string('reserve_wallet_address');
            $table->tinyInteger('featured')->default('0');
            $table->tinyInteger('hot')->default('0');
            $table->timestamps();
            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('airdrops');
    }
};
