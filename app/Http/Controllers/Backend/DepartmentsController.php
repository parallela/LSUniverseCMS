<?php

namespace App\Http\Controllers\Backend;

use App\Department;
use App\Http\Controllers\Controller;

class DepartmentsController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        $departments = Department::all();
        return response()->json($departments, 200);
    }
}
