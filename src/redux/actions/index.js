import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const ADD_PRODUCT_CARRITO = "ADD_PRODUCT_CARRITO";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

export function getAllProducts() {
    return async function (dispatch) {
        try {
            let res = await axios.get(
                "https://dummyjson.com/products?limit=100"
            );
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data.products,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function getProductDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get("https://dummyjson.com/products/" + id);
            dispatch({
                type: GET_PRODUCT_ID,
                payload: res.data.products,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function addProductCarrito(payload) {
    try {
        return {
            type: ADD_PRODUCT_CARRITO,
            payload,
        };
    } catch (err) {
        console.log(err);
    }
}
export function filterByCategory(payload) {
    return {
        type: FILTER_BY_CATEGORY,
        payload,
    };
}
