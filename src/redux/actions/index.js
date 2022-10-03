import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";

export function getAllProducts() {
    return async function (dispatch) {
        try {
            let res = await axios.get("https://dummyjson.com/products");
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data.products,
            });
            // console.log(res.data.products);
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
