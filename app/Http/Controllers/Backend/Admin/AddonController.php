<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Addon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use LSUniverse\LSUAddonHelper;

class AddonController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        try {
            $addons = LSUAddonHelper::lsUAddons();
        } catch (\ReflectionException $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
        return response()->json($addons, 200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $addon_check = Addon::where('namespace', $request->input('namespace'))->first();

        if ($addon_check !== null) {
            return response()->json(['error' => 'This addon with that namespace already exist'], 400);
        }
        Addon::create([
            'namespace' => $request->input('namespace'),
        ]);
        return response()->json(['message' => 'Your addon was added successfully'], 201);

    }
}
