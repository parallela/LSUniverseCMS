export const _networkUpdateUserBillingInformation = async (data) => {
    const rawResponse = await fetch('/api/user/update/details', {
        method: 'POST',
        headers: {
            'Accept': 'applicaiton/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
