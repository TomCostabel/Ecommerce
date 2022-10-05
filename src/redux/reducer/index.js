import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_CARRITO,
} from "../actions/index.js";

const initialState = {
    productos: [],
    productDetail: [],
    carrito: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productos: action.payload,
            };
        case GET_PRODUCT_ID:
            return {
                ...state,
                productDetail: action.payload,
            };
        case ADD_PRODUCT_CARRITO:
            return {
                ...state,
                carrito: [...state.carrito, action.payload],
            };

        default:
            return state;
    }
};

export default rootReducer;
