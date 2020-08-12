import React from "react";
import { decode } from "jsonwebtoken";

export function Authenticator() {
    const token = localStorage.getItem("token");
    var decodedToken = decode(token, { complete: true });

    if (decodedToken === null) {
        localStorage.removeItem('token');
        return false;
    }

    return true;
}

export async function UserData() {
    if(Authenticator()) {
        const rawResponse = await fetch('api/auth/me?token='+localStorage.getItem('token'),{
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const jsonResponse = await rawResponse.json();

        return jsonResponse;
    }
}
