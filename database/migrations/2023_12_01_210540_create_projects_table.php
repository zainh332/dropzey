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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_name');
            $table->text('project_description');
            $table->string('project_logo');
            $table->string('cover_image');
            $table->string('website_link');
            $table->string('intro_video_link')->nullable();
            $table->string('facebook_profile')->nullable();
            $table->string('instragram_profile')->nullable();
            $table->string('twitter_profile')->nullable();
            $table->string('youtube_channel')->nullable();
            $table->string('telegram_channel')->nullable();
            $table->string('discord_channel')->nullable();
            $table->timestamps();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
