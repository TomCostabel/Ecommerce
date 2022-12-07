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
            <h6 className="title-font">{props.title}</h6>
            <br></br>

            <div
                className="d-flex justify-content-between align-items-end
            "
            >
                <p className="price">US$ {props.price}</p>
                <button
                    type="button"
                    class="buttonclass"
                    value={props.title}
                    onClick={(e) => {
                        dispatch(addProductCarrito(e.target.value));
                    }}
                >
                    Add🛒
                </button>
            </div>
        </div>
    );
}
