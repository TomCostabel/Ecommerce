import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import "../Cart/Cart.css";

export default function Carrito() {
    const products = useSelector((state) => state.productos);
    const carrito = useSelector((state) => state.carrito);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div>
            <button onClick={() => console.log("Hola", carrito)}>
                botoncito
            </button>

            {products?.map((e) => {
                if (carrito?.includes(e.title))
                    return (
                        <div key={e.id} className="container-cada-producto">
                            <img
                                className="image"
                                src={e.images[0]}
                                alt="fotoproduct"
                            />
                            <h5>{e.title}</h5>
                            <h6>{e.description}</h6>
                            <p>US$ {e.price}</p>
                        </div>
                    );
            })}
        </div>
    );
}
