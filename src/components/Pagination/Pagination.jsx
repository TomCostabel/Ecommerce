import React from "react";
import "../Pagination/Pagination.css";

export default function Pagination(props) {
    return (
        <div className="container-pagination">
            <div className="container">
                <div>
                    <h3
                        className="botonPrevNext"
                        onClick={props.prevHandler}
                        disabled={props.currentPage <= 1 && true}
                    >
                        &#8592;
                    </h3>
                </div>
                <div>
                    <ul className="container-cards">{props.items}</ul>
                </div>
                <div>
                    <h3 className="botonPrevNext" onClick={props.nextHandler}>
                        &#8594;
                    </h3>
                </div>
            </div>
        </div>
    );
}
