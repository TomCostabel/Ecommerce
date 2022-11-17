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

    var totalCantidad = 0;

    return !carrito.length ? (
        <h3>Carrito Vacio</h3>
    ) : (
        <div>
            <button onClick={() => console.log("Hola", carrito)}>
                botoncito
            </button>
            {products?.map((e) => {
                var count = 0;

                if (carrito?.includes(e.title))
                    return (
                        <div key={e.id}>
                            <div className="container-cada-producto">
                                <img
                                    className="image"
                                    src={e.images[0]}
                                    alt="fotoproduct"
                                />

                                {carrito.forEach((el) =>
                                    el === e.title ? (count = count + 1) : count
                                )}

                                {carrito.forEach((el) =>
                                    el === e.title
                                        ? (totalCantidad =
                                              totalCantidad + e.price)
                                        : count
                                )}

                                <h3>{count} </h3>
                                <h5>{e.title}</h5>

                                <p>US$ {e.price}</p>
                            </div>
                        </div>
                    );
            })}

            <h1>Total ${totalCantidad}</h1>
        </div>
    );
}
