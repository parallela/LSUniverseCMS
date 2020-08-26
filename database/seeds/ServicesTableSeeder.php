<?php

use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('addons')->insert([
            "namespace" => "LSUniverse\Addons\ExampleAddon\Main"
        ]);

        \Illuminate\Support\Facades\DB::table('services')->insert([
            "name" => "Example Service",
            "icon" => "https://iconarchive.com/download/i47368/icons-land/vista-hardware-devices/Home-Server.ico",
            "description" => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
            "price" => 12.00,
            "content" => serialize($array = ["24/7 Uptime", "250GB SSD", "CPU Intel Core I7-7700", "10Gbit/s uplink"]),
            "u_price" => 24.00,
            "addon_id" => 1
        ]);
    }
}
