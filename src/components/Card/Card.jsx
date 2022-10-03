import React from "react";
import "../Card/Card.css";

export default function Card(props) {
    return (
        <div className="container-card">
            <img className="imagen" src={props.images[0]} alt="imagencard" />
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
        </div>
    );
}
