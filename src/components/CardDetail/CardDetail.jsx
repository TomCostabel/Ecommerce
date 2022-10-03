import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/actions";

export default function CardDetail() {
    const { id } = useParams();
    const detail = useSelector((state) => state.productos);
    const dispatch = useDispatch();
    console.log(id);
    useEffect(() => {
        dispatch(getAllProducts());
        // dispatch(getProductDetail(id));
    }, [dispatch, id]);

    return (
        <div>
            <img src={detail[id - 1]?.images[0]} alt="" />
            <h1>{detail[id - 1]?.title}</h1>
            <h4>{detail[id - 1]?.description}</h4>
            <h3>{detail[id - 1]?.category}</h3>
        </div>
    );
}
