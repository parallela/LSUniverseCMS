export const _networkPasswordFirstStep = async (data) => {
    const rawResponse = await fetch("/api/user/password/forget/generate", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return rawResponse;
}

export const _networkPasswordSecondStep = async (data) => {
    const rawResponse = await fetch('/api/user/password/forget/check', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}

export const _networkPasswordFinalStep = async (data) => {
    const rawResponse = await fetch('/api/user/password/forget/change', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return rawResponse;
}
