import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

export default function Card(props) {
    return (
        <div className="container-card">
            <Link to={`/Home/Product/${props.id}`}>
                <img
                    className="imagen"
                    src={props.images[0]}
                    alt="imagencard"
                />
            </Link>
            <p>US$ {props.price}</p>
            <h6 className="title-font">{props.title}</h6>
        </div>
    );
}
