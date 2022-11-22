import React, { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

import "../Cart/Cart.css";

export default function Carrito() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productos);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        dispatch(getAllProducts());
        let changuito2 = JSON.parse(localStorage.getItem("carrito")) || [];
        setCart(changuito2);
    }, [dispatch, setCart]);

    var totalCantidad = 0;

    return !cart.length ? (
        <button onClick={() => console.log("esto es cart", cart)}>
            botoncito
        </button>
    ) : (
        <div>
            <button onClick={() => console.log("esto es cart 2", cart)}>
                botoncito
            </button>
            {products?.map((e) => {
                var count = 0;

                if (cart?.includes(e.title)) {
                    //-------------------------------------- ELIMINAR TODOS DEL LocalStorage ------------------//
                    const deleteAllProducts = (value) => {
                        let deleteAll = cart.filter((e) => e !== value);
                        setCart(deleteAll);

                        localStorage.setItem(
                            "carrito",
                            JSON.stringify(deleteAll)
                        );
                    };
                    //-------------------------------------- RESTAR PRODUCTOS AL LocalStorage ------------------//

                    const restarProducto = (cart, value) => {
                        let arr1 = cart;
                        arr1.splice(0, arr1.indexOf(2));
                        // let arr2 = cart.splice(cart.indexOf(value) + 1);
                        // let arrFinal = arr1.concat(arr2);
                        console.log(arr1);
                    };
                    //-------------------------------------- SUMAR PRODUCTOS AL LocalStorage ------------------//

                    const sumarProducto = (value) => {
                        let newVariable = [...cart, value];
                        setCart(newVariable);
                        localStorage.setItem(
                            "carrito",
                            JSON.stringify(newVariable)
                        );
                    };

                    return (
                        <div key={e.id}>
                            <div className="container-cada-producto">
                                <img
                                    className="image"
                                    src={e.images[0]}
                                    alt="fotoproduct"
                                />

                                {cart.forEach((el) =>
                                    el === e.title ? (count = count + 1) : count
                                )}

                                {cart.forEach((el) =>
                                    el === e.title
                                        ? (totalCantidad =
                                              totalCantidad + e.price)
                                        : count
                                )}
                                <button onClick={() => restarProducto(e.title)}>
                                    -
                                </button>

                                <h3>{count} </h3>
                                <button onClick={() => sumarProducto(e.title)}>
                                    +
                                </button>

                                <h5>{e.title}</h5>

                                <p>US$ {e.price}</p>
                                <button
                                    onClick={() => deleteAllProducts(e.title)}
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    );
                }
            })}

            <h1>Total ${totalCantidad}</h1>
        </div>
    );
}
