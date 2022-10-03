import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

export default function Home() {
    const products = useSelector((state) => state.productos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    console.log("estos son los productos", products);
    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
}
