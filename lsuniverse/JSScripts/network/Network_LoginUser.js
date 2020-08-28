export const _networkLoginUser = async (data) => {
    const rawResponse = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
