<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserForgetPassword extends Mailable
{
    use Queueable, SerializesModels;

    protected $key;
    protected $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($key, User $user)
    {
        $this->user = $user;
        $this->key = $key;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.userForgetPassword')->with(['key'=>$this->key,'user'=>$this->user]);
    }
}
