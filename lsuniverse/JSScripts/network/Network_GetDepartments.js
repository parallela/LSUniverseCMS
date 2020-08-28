export const _networkGetDepartments = async () => {
    const rawResponse = await fetch('/api/departments/list', {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    return rawResponse;
}
