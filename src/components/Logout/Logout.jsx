import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Logout/Logout.css";

export default function Logout() {
    const { logout } = useAuth0();
    return (
        <h6 onClick={() => logout({ returnTo: window.location.origin })}>
            <i class="bi bi-box-arrow-right iconito" />
        </h6>
    );
}
