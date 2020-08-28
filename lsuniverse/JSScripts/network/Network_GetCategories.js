export const _networkGetCategories = async () => {
    const rawResponse = await fetch('/api/site/categories', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    return rawResponse;
}
