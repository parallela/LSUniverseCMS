export const _networkLogoutUser = () => {
    const rawResponse = fetch("/api/auth/logout", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    });

    return rawResponse;
}
