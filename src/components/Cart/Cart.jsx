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
    console.log(carrito);
    var num = 0;

    return !carrito.length ? (
        <h3>Carrito Vacio</h3>
    ) : (
        <div>
            <button onClick={() => console.log("Hola", carrito)}>
                botoncito
            </button>

            {products?.map((e) => {
                if (carrito?.includes(e.title))
                    return (
                        <div>
                            <div key={e.id} className="container-cada-producto">
                                <img
                                    className="image"
                                    src={e.images[0]}
                                    alt="fotoproduct"
                                />

                                <h3>{num}</h3>
                                <h5>{e.title}</h5>

                                <p>US$ {e.price}</p>
                            </div>
                        </div>
                    );
            })}
        </div>
    );
}
