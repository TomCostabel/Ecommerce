import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_CARRITO,
    FILTER_BY_CATEGORY,
} from "../actions/index.js";

const initialState = {
    productos: [],
    productDetail: [],
    carrito: [],
    categorys: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            const array = [];
            state.productos?.forEach((el) => {
                if (!array.includes(el.category)) array.push(el.category);
            });
            return {
                ...state,
                productos: action.payload,
                categorys: array,
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
        case FILTER_BY_CATEGORY:
            const productos2 = state.productos;
            const filterCategory =
                action.payload === "none"
                    ? productos2
                    : productos2?.filter((e) => e.category === action.payload);

            return {
                ...state,
                productos: filterCategory,
            };

        default:
            return state;
    }
};

export default rootReducer;
