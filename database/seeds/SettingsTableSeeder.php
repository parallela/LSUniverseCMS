<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('settings')->insert([
            [
                "key" => "title",
                "value" => "LSUniverse | Automatic Gaming Billing System"
            ],
            [
                "key" => "keywords",
                "value" => "keywords1,keywords2,keywords3"
            ],
            [
                "key" => "247-support-num",
                "value" => "+012 345 678 9"
            ],
            [
                "key" => "logo",
                "value" => "/images/logo.png"
            ],
            [
                "key" => "year",
                "value" => "2019"
            ],
            [
                "key" => "number",
                "value" => "123456789"
            ],
            [
                "key" => "str_address",
                "value" => "Str. Address N1"
            ],
            [
                "key" => "contact-email",
                "value" => "email@email.com"
            ],
            [
                "key" => "heading-text",
                "value" => "Heading"
            ],
            [
                "key" => "heading-text-desc",
                "value" => "Example description of your company"
            ],
            [
                "key" => "fbapp_id",
                "value" => "XXXXXXXXXXXX"
            ],
            [
                "key" => "og:title",
                "value" => 'OG Title'
            ],
            [
                "key" => "og:type",
                "value" => "lsuniverse.type"
            ],
            [
                "key" => "og:url",
                "value" => env('APP_URL')
            ],
            [
                "key" => "og:image",
                "value" => "/images/logo.png"
            ],
            [
                "key" => "twitter:title",
                "value" => env('APP_NAME')
            ],
            [
                "key" => "twitter:description",
                "value" => "Desc"
            ],
            [
                "key" => "twitter:image",
                "value" => "/images/logo.png"
            ],
            [
                "key" => "description",
                "value" => "Describe your company"
            ],
            [
                "key" => "theme",
                "value" =>
                    "Default"
            ]
        ]);
    }
}
