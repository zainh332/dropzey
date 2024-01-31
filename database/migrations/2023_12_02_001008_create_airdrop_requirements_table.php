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
        Schema::create('airdrop_requirements', function (Blueprint $table) {
            $table->id();
            $table->integer('airdrop_id')->index();
            $table->string('twitter_profile_link')->nullable();
            $table->string('twitter_tweet_link')->nullable();
            $table->string('telegram_channel_link')->nullable();
            $table->string('discord_channel_link')->nullable();
            $table->string('youtube_channel_link')->nullable();
            $table->string('youtube_video_link')->nullable();
            $table->timestamps();
            
            $table->foreign('airdrop_id')->references('id')->on('airdrops')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('airdrop_requirements');
    }
};
