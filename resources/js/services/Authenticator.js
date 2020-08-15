import React from "react";
import { decode } from "jsonwebtoken";
import { useTranslation } from "react-multi-lang";

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const t = useTranslation();

export function Authenticator() {
    const token = localStorage.getItem("token");
    var decodedToken = decode(token, { complete: true });

    if (decodedToken === null) {
        localStorage.removeItem("token");
        return false;
    }

    return true;
}

export async function getUserData() {
    if (Authenticator()) {
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
}

export async function getUserDataResult() {
    const userData = await getUserData();

    return userData;
}

export async function UserData() {
    let data = await getUserDataResult();
    if (data.email === undefined) {
        localStorage.removeItem("token");
        window.location.href = "/auth";
        return;
    }
    return data;
}

export function loginValidation(data) {
    if (!emailRegex.test(String(data.email).toLowerCase())) {
    }
    if(data.password < 8) {

    }
}

export function registerValidation(data) {
    if (data.name < 4) {
    }

    if (data.password < 8) {
    }

    if (data.password != data.re_password) {
    }

    if (!emailRegex.test(String(data.email).toLowerCase())) {
    }
}
