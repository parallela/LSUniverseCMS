<?php

namespace App\Policies;

use App\Category;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create models.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\User $user
     * @param \App\Ticket $ticket
     * @return mixed
     */
    public function update(User $user, Category $category)
    {
        return $user->isAdmin === 1;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\User $user
     * @param \App\Ticket $ticket
     * @return mixed
     */
    public function delete(User $user, Category $category)
    {
        return $user->id === $category->user_id || $user->isAdmin === 1;
    }
}
