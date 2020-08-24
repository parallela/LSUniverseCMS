<?php

namespace LSUniverse;

use HaydenPierce\ClassFinder\ClassFinder;
use Illuminate\Support\Facades\DB;

class LSUAddonHelper
{

    /**
     * @return DB
     */
    public static function lsUDatabase($table)
    {
        // Return database facade provided by Illuminate
        return DB::table($table);
    }


    /**
     * @return array
     * @throws \ReflectionException
     */
    public static function lsUAddons()
    {
        // Get all registered addons.
        $addons_in_db = self::lsUAddonsInDatabase();
        $valid_addons = [];
        $classes = ClassFinder::getClassesInNamespace('LSUniverse\\Addons', ClassFinder::RECURSIVE_MODE);

        foreach ($classes as $c) {
            $class = new \ReflectionClass($c);
            // Add all classes that implement iLSUniverseAddon interface. This actually indicate the class is actually a addon.
            if ($class->implementsInterface('LSUniverse\\iLSUniverseAddon')) {
                $valid_addons[] = $class->name;
            }
        }
        // Merge all the arrays in one
        $addons_merge = array_merge($valid_addons, $addons_in_db);

        // Remove database addons from array and show only not installed one.
        $addons = array_diff($addons_merge, array_diff_assoc($addons_merge, array_unique($addons_merge)));

        return $addons;
    }

    /**
     * @return array
     */
    public static function lsUAddonsInDatabase()
    {
        $addons_namespaces = [];
        $addons_in_db = self::lsUDatabase('addons')->get()->toArray();

        // Add only addon namespaces in the array
        foreach ($addons_in_db as $addon) {
            $addons_namespaces[] = $addon->namespace;
        }

        return $addons_namespaces;
    }

}
