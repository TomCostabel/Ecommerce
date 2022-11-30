import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";
import { LoginButton } from "../Login/Login";
import Logout from "../Logout/Logout";
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
        <nav className="container">
            <div className="col">
                <h2>NN </h2>
            </div>
            <div className="col">
                {/* <Link to="/Carrito"> */}
                <h5>
                    <i class="bi bi-basket-fill "></i> Cart
                </h5>
                {/* </Link> */}
                <h5>
                    <i class="bi bi-bag-check-fill"></i> Products
                </h5>

                <h5>
                    <i class="bi bi-people-fill"></i> About we
                </h5>

                {/* <Filters /> */}
            </div>
            <div className="col">
                <Profile />
            </div>
        </nav>
    ) : (
        // <nav class="navbar navbar-expand-md flex-wrap ">
        //     <div class="container-fluid">
        //         <a class="navbar-brand">
        //             <h2>IZssssssssssI </h2>
        //             <h2>SHOP </h2>
        //         </a>

        //         <button
        //             class="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div
        //             class="collapse navbar-collapse"
        //             id="navbarSupportedContent"
        //         >
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page">
        //                         <h5>
        //                             <i class="bi bi-basket-fill "></i> Cart
        //                         </h5>
        //                     </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link">
        //                         <h5>
        //                             <i class="bi bi-bag-check-fill"></i>
        //                             Products
        //                         </h5>
        //                     </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link">
        //                         <h5>
        //                             <i class="bi bi-people-fill"></i> About we
        //                         </h5>
        //                     </a>
        //                 </li>
        //                 {/* <Filters /> */}

        //                 <Profile />
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div>
            <Link to="/">
                <h1 onClick={() => dropAlert()}>Carrito</h1>
            </Link>
            <LoginButton />

            <Profile />
        </div>
    );
}
