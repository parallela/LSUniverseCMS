export const _networkGetTicketAnswers = async (ticket_id) => {
    const rawResponse = await fetch(`/api/user/tickets/show/${ticket_id}`, {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    return rawResponse;
}
