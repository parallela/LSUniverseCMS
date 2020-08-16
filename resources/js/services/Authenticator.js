import React from "react";
import { decode } from "jsonwebtoken";

export async function getUserData() {
    const rawResponse = await fetch("api/auth/me", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            Accept: "application/json"
        }
    });

    const jsonResponse = await rawResponse.json();

    return jsonResponse;
}

export async function getUserDataResult() {
    const userData = await getUserData();

    return userData;
}

export async function UserData() {
    let data = await getUserDataResult();
    if (data.error == "invalid_auth") {
        localStorage.removeItem("token");
        localStorage.removeItem("lsU_userData");
    }
    localStorage.setItem("lsU_userData", JSON.stringify(data));
    setInterval(() => {
        localStorage.setItem("lsU_userData", JSON.stringify(data));
    }, 100);

    return true;
}
