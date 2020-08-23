<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Ticket;
use App\TicketAnswer;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Support\Facades\Validator;
use App\User;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        $tickets = User::find(auth()->id())->tickets;

        return response()->json($tickets, 200);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $current_tickets = Ticket::where('user_id', auth()->id())->where('status', 'open')->get()->toArray();

        if (count($current_tickets) >= 5) {
            return response()->json(['error' => 'Too many open tickets. Max open tickets: 5'], 400);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:4',
            'content' => 'required',
            'department' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $ticket = Ticket::create([
            'name' => $request->input('name'),
            'user_id' => auth()->id(),
            'department_id' => $request->input('department'),
            'status' => 'open'
        ]);

        $first_answer = TicketAnswer::create([
            'ticket_id' => $ticket->id,
            'user_id' => auth()->id(),
            'content' => $request->input('content')
        ]);


        return response()->json(['message' => 'Created'], 201);

    }

    public function show($id)
    {
        $ticket = Ticket::with('answers')->where('id', $id)->where('user_id', auth()->id())->firstOrFail();

        return response()->json($ticket, 200);
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'department' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $ticket = Ticket::find('id', $id);

        if (auth()->user()->isAdmin === 1) {
            Ticket::update([
                'name' => $request->input('name'),
                'department' => $request->input('department'),
                'status' => $request->input('status')
            ]);
            return response()->json(['message' => 'Updated'], 200);
        }

        return response()->json(['message' => 'Invalid privileges'], 403);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $ticket = Ticket::where('id', $id)->where('user_id', auth()->id())->delete();

        return response()->json(['message' => 'Deleted'], 200);
    }

    public function add_answer(Request $request, $id)
    {
        $current_ticket = Ticket::where('id', $id)->where('user_id', auth()->id());
        $ticket = $current_ticket->firstOrFail();
        $current_ticket->update([
            'updated_at' => Carbon::now()
        ]);

        $validator = Validator::make($request->all(), [
            'content' => 'required',
        ]);

        $last_ticket = TicketAnswer::where('user_id', auth()->id())->where('ticket_id', $id)->latest('created_at')->first();
        if ($last_ticket->created_at->diffInMinutes() < 1) {
            return response()->json(['error' => 'Please wait 1 minute, before another reply.'], 400);
        }


        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        $answer = TicketAnswer::create([
            'content' => $request->input('content'),
            'user_id' => auth()->id(),
            'ticket_id' => $ticket->id
        ]);

        return response()->json(['message' => 'Created'], 200);
    }
}
