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
        return DB::table($table);
    }


    /**
     * @return array
     * @throws \ReflectionException
     */
    public static function lsUAddons()
    {
        $addons_in_db = self::lsUAddonsInDatabase();
        $valid_addons = [];
        $classes = ClassFinder::getClassesInNamespace('LSUniverse\\Addons', ClassFinder::RECURSIVE_MODE);

        foreach ($classes as $c) {
            $class = new \ReflectionClass($c);
            if ($class->implementsInterface('LSUniverse\\iLSUniverseAddon')) {
                $valid_addons[] = $class->name;
            }
        }

        $addons_merge = array_merge($valid_addons, $addons_in_db);
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

        foreach ($addons_in_db as $addon) {
            $addons_namespaces[] = $addon->namespace;
        }

        return $addons_namespaces;
    }

}
