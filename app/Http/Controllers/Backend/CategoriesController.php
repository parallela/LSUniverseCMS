<?php

namespace App\Http\Controllers\Backend;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategory;

class CategoriesController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        $categories = Category::all();

        return response()->json($categories, 200);
    }

    /**
     * @param StoreCategory $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(StoreCategory $request)
    {
        $category = Category::create([
            'user_id' => auth()->id,
            'name' => $request->name
        ]);

        return response()->json(['message' => 'Category created successfully'], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $categories = Category::with('services')->where('id', $id)->firstOrFail();

        return response()->json($categories, 200);
    }

    /**
     * @param StoreCategory $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(StoreCategory $request, $id)
    {
        $category = Category::where('id', $id)->firstOrFail();

        $this->authorize('update', $category);

        Category::update([
            'name' => $request->name
        ]);

        return response()->json(['message' => 'Category updated.'], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete($id)
    {
        $category = Category::where('id', $id)->firstOrFail();
        $this->authorize('delete', $category);

        return response()->json(['message' => 'Category deleted.'], 200);
    }
}
