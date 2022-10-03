import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import Card from "../Card/Card";
import "../Home/Home.css";

export default function Home() {
    const products = useSelector((state) => state.productos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    console.log("estos son los productos", products);

    const allProducts = products?.map((e) => {
        return (
            <Card
                key={e.id}
                id={e.id}
                title={e.title}
                images={e.images}
                price={e.price}
            />
        );
    });
    console.log("acaaa", allProducts);
    return (
        <div>
            <h3 className="container-cards">{allProducts}</h3>
        </div>
    );
}
