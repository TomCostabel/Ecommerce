import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";
import { LoginButton } from "../Login/Login";
import "../NavBar/NavBar.css";
import Profile from "../Profile/Profile";

export default function NavBar() {
    const { isAuthenticated } = useAuth0();

    const dropAlert = () => {
        alert(
            "Antes de realizar una compra, por favor, ingrese con su usuario"
        );
    };

    return isAuthenticated ? (
        <div className="container   ">
            <div className="">
                <h2>NOMBRE </h2>
            </div>

            <div className=" ">
                {/* <Link to="/Carrito"> */}
                {/* <h5>
                    <i class="bi bi-basket-fill "></i> Cart
                </h5> */}
                {/* </Link> */}
                <h5>
                    <i class="bi bi-bag-check-fill"></i> Products
                </h5>

                <h5>
                    <i class="bi bi-people-fill"></i> About we
                </h5>

                <Filters />
            </div>

            <div className=" d-flex align-items-center">
                <Profile />
            </div>
        </div>
    ) : (
        <div>
            <Link to="/">
                <h1 onClick={() => dropAlert()}>Carrito</h1>
            </Link>
            <LoginButton />

            <Profile />
        </div>
    );
}
