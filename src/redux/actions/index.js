import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

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
