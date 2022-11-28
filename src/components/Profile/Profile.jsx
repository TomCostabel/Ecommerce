import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Profile/Profile.css";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log("esto es user", user);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        isAuthenticated && (
            <div className="container d-flex justify-content-start profile-container">
                <div className="row ">
                    {/* <img className="col " src={user.picture} alt={user.name} /> */}
                    <h2 className="col-lg-6">{user.nickname}</h2>
                    <p className="col-lg-6">Email:{user.email}</p>
                </div>
            </div>
        )
    );
}
