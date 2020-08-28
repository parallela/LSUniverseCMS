export const _networkRegisterUser = async (data) => {
    const rawResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
