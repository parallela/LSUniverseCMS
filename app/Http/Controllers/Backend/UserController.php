<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Order;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update_user_details(Request $request)
    {
		// testtststststtstts
        $user = User::find(auth()->id());

        $validator = Validator::make($request->all(), [
            'address_1' => 'required',
            'address_2' => 'required',
            'phone_number' => 'required|phone:AUTO,BG',
            'city' => 'required',
            'region' => 'required',
            'zipcode' => 'required|integer',
            'mailing_list' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $user->details()->update([
            'street_address_1' => $request->input('address_1'),
            'street_address_2' => $request->input('address_2'),
            'phone_number' => $request->input('phone_number'),
            'city' => $request->input('city'),
            'region' => $request->input('region'),
            'zipcode' => $request->input('zipcode'),
            'mailing_list' => $request->input('mailing_list')
        ]);

        return response()->json(['message' => 'Details was updated'], 200);

    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function get_user_services()
    {
        $orders = Order::with('service')->where('user_id', auth()->id())->get()->toArray();

        $custom_service_array = [];

        for ($i = 0; $i < count($orders); $i++) {
            $custom_service_array[$i]['name'] = $orders[$i]['service']['name'];
            $custom_service_array[$i]['price'] = $orders[$i]['service']['price'];
            $custom_service_array[$i]['created_at'] = $orders[$i]['created_at'];
            $custom_service_array[$i]['order_id'] = $orders[$i]['id'];
            $custom_service_array[$i]['expire_at'] = $orders[$i]['expire_at'];
        }
        return response()->json($custom_service_array, 200);
    }
}
