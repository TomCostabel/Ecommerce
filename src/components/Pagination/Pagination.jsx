import React from "react";
import "../Pagination/Pagination.css";

export default function Pagination(props) {
    return (
        <div>
            <div className="container-buttons">
                <h3
                    className={"individual" && "botonPrevNext"}
                    onClick={props.prevHandler}
                    disabled={props.currentPage <= 1 && true}
                >
                    &#8592;
                </h3>
                <h4>PAGE {props.currentPage + 1}</h4>
                <h3
                    className={"individual" && "botonPrevNext"}
                    onClick={props.nextHandler}
                >
                    &#8594;
                </h3>
            </div>
            <br />
            <div>
                <ul className="container-cards">{props.items}</ul>
            </div>
        </div>
    );
}
