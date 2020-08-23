import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const time = new Date();
const cookie_expires_in = 3600;

export async function getUserData() {
    const rawResponse = await fetch("/api/auth/me", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            Accept: "application/json"
        }
    });

    const jsonResponse = await rawResponse.json();

    return jsonResponse;
}


export async function UserData() {
    let data = await getUserData();
    if (data.error == "invalid_auth") {
        localStorage.removeItem("token");
        cookies.remove('user');

        return false;
    }
    const userData = JSON.stringify(data);

    cookies.set('user', userData,{path: '/', sameSite: 'strict', expires: new Date(time.getTime() + cookie_expires_in * 1000) });

    return true;
}
export async function updateUserCookie() {
    let data = await getUserData();
    cookies.set('user', JSON.stringify(data), {path: '/', sameSite: 'strict', expires: new Date(time.getTime() + cookie_expires_in * 1000)});
}
export function User() {
    let user = cookies.get('user');
    return user === undefined ? localStorage.removeItem('token') : user;
}

export function logout_user() {

    let logout = fetch("/api/auth/logout", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    });
    localStorage.removeItem("token");
    cookies.remove('user');

    window.location.href = '/auth';

    return true;
}
