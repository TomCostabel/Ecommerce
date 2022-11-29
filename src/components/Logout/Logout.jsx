import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
    const { logout } = useAuth0();
    return (
        <h5 onClick={() => logout({ returnTo: window.location.origin })}>
            <i class="bi bi-box-arrow-right"></i>
        </h5>
    );
}
