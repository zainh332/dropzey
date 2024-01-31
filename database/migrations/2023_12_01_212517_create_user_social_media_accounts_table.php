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
        Schema::create('user_social_media_accounts', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->index();
            $table->string('twitter_profile')->nullable();
            $table->string('telegram_channel')->nullable();
            $table->string('discord_channel')->nullable();
            $table->string('youtube_channel')->nullable();
            $table->string('youtube_video')->nullable();
            $table->timestamps();
            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_social_media_accounts');
    }
};
