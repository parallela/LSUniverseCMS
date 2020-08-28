export const _networkGetUserServices = async () => {
    const rawResponse = await fetch('/api/user/services', {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    return rawResponse;
}
