import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";

export default function NavBar() {
    return (
        <div>
            <Link to="/Home/Carrito">
                <h1>Carrito</h1>
                <LoginButton />
                <Logout />
                <Profile />
            </Link>
        </div>
    );
}
