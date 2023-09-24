<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

//         \App\Models\UsersGroups::factory(2)->create(['user_id' => 1]);
////         \App\Models\Cards::factory(3)->create(['group_id' => 1]);
////         \App\Models\Cards::factory(3)->create(['group_id' => 2]);
//         \App\Models\Cards::factory(3)->create(['group_id' => 3]);
//
//



//

         \App\Models\User::factory()->create([
             'name' => 'Michal',
             'email' => 'haruhiroangor@gmail.com',
             'password' => Hash::make('RTVeuroagd1!'),
             'admin' => '1',
         ]);
    }
}
