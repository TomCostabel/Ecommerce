import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getAllProducts } from "../../redux/actions";

export default function Filters() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productos);

    function handleFilterByCategory(e) {
        e.target.value === "none"
            ? dispatch(getAllProducts())
            : dispatch(filterByCategory(e.target.value));
        // setCurrentPage(0);
    }
    return (
        <div>
            <select onChange={(e) => handleFilterByCategory(e)}>
                <option>Categorys</option>

                {products?.map((e) => (
                    <option value={e.name} key={e.id}>
                        {e.category}
                    </option>
                ))}
            </select>
        </div>
    );
}
