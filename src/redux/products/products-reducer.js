import products from "../../dist/products";
const initialState = {
    products: products,
    product: [],
    totalPricesForDelivery: []
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_PRODUCTS":
            return { ...state.products };

        case "GET_PRODUCT_BY_ID":
            return { ...state, product: [state.products.find(p => p.id == action.payload)] };

        default:
            return state;


    }
}
