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
//        Schema::create('cards', function (Blueprint $table) {
//            $table->id();
//            $table->foreignId('user_id');
//            $table->foreignId('card_id');
//            $table->enum('status', ['learning', 'learned']);
//        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
