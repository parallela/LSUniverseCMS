<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAnswer;
use App\Http\Requests\StoreTicket;
use App\Http\Requests\UpdateTicket;
use App\Ticket;
use App\TicketAnswer;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Support\Facades\Auth;
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
    public function create(StoreTicket $request)
    {
        $current_tickets = Ticket::where('user_id', auth()->id())->where('status', 'open')->get()->toArray();

        if (count($current_tickets) >= 5) {
            return response()->json(['errors' => ['manyattempts' => 'Too many open tickets. Max open tickets: 5']], 400);
        }

        $ticket = Ticket::create([
            'name' => $request->input('name'),
            'user_id' => auth()->id(),
            'department_id' => $request->input('department'),
            'status' => 'open'
        ]);

        $ticket->answers()->create([
            'user_id' => auth()->id(),
            'content' => $request->input('content')
        ]);


        return response()->json(['message' => 'Created'], 201);

    }

    public function show($id)
    {
        $ticket = Ticket::with('answers')->where('id', $id)->firstOrFail();

        //$this->authorize('view', $ticket);

        return response()->json($ticket, 200);
    }

    public function update(UpdateTicket $request, $id)
    {
        $ticket = Ticket::where('id', $id)->firstOrFail();

        $this->authorize('update', $ticket);

        Ticket::update([
            'name' => $request->input('name'),
            'department' => $request->input('department'),
            'status' => $request->input('status')
        ]);
        return response()->json(['message' => 'Updated'], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $ticket = Ticket::where('id', $id)->firstOrFail();

        $this->authorize('delete', $ticket);

        return response()->json(['message' => 'Deleted'], 200);
    }

    public function add_answer(StoreAnswer $request, $id)
    {
        $ticket = Ticket::where('id', $id)->firstOrFail();

        $this->authorize('addAnswer', $ticket);

        $ticket->update([
            'updated_at' => Carbon::now()
        ]);

        $lastTicketAnswer = $ticket->answers()->latest()->first();
        if ($lastTicketAnswer->created_at->diffInMinutes() < 1) {
            return response()->json(['errors' => ['delay' => 'Please wait 1 minute, before another reply.']], 400);
        }

        $ticket->answers()->create([
            'content' => $request->input('content'),
            'user_id' => auth()->id(),
        ]);

        return response()->json(['message' => 'Created'], 200);
    }
}
