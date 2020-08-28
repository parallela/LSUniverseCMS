<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\StoreCategory;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function list()
    {
        $categories = Category::all();

        return response()->json($categories, 200);
    }

    public function create(StoreCategory $request)
    {
        $category = Category::create([
            'user_id' => auth()->id,
            'name' => $request->name
        ]);

        return response()->json(['message' => 'Category created successfully'], 200);
    }

    public function show($id)
    {
        $categories = Category::with('services')->where('id', $id)->firstOrFail();

        return response()->json($categories, 200);
    }

    public function update(StoreCategory $request, $id)
    {
        $category = Category::where('id', $id)->firstOrFail();

        $this->authorize('update', $category);

        Category::update([
            'name' => $request->name
        ]);

        return response()->json(['message' => 'Category updated.'], 200);
    }

    public function delete($id)
    {
        $category = Category::where('id', $id)->firstOrFail();
        $this->authorize('delete', $category);

        return response()->json(['message' => 'Category deleted.'], 200);
    }
}
