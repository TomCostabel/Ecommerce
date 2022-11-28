import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductCarrito } from "../../redux/actions";
import "../Card/Card.css";

export default function Card(props) {
    const dispatch = useDispatch();

    return (
        <div
            className="container-card  
        "
        >
            <Link to={`/Product/${props.id}`}>
                <img
                    className="imagen"
                    src={props.images[0]}
                    alt="imagencard"
                />
            </Link>
            <p>US$ {props.price}</p>
            <h6 className="title-font">{props.title}</h6>
            <button
                value={props.title}
                onClick={(e) => {
                    dispatch(addProductCarrito(e.target.value));
                }}
            >
                add cart
            </button>
        </div>
    );
}
