import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";

export default function NavBar() {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <div>
            <Link to="/Home/Carrito">
                <h1>Carrito</h1>
            </Link>

            <Logout />
            <Profile />
        </div>
    ) : (
        <div>
            <Link to="/Home/Carrito">
                <h1>Carrito</h1>
            </Link>
            <LoginButton />

            <Profile />
        </div>
    );
}
