import products from "../../dist/products";
const initialState = {
    products: products,
    product: [],
    totalPricesForDelivery: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state.products };
        case "GET_PRODUCT_BY_ID":
            return { ...state, product: [state.products.find(p => p.id == action.payload)] };

        // case 'GET_PRODUCT_BY_ID': {
        //     return {
        //         ...state,
        //         // This time, we need to make a copy of the old todos array
        //         product: state.products.map(p => {
        //             // If this isn't the todo item we're looking for, leave it alone
        //             if (p.id !== action.payload) {
        //                 return p
        //             }

        //             // We've found the todo that has to change. Return a copy:
        //             return {
        //                 ...p,
        //             }
        //         })
        //     }
        // }


        case "GET_DELIVERIES_BY_GROUP_CODE":
            return { ...state, deliveries: action.payload };
        case "GET_WEEK_SUMMARY":
            return { ...state, deliveries: action.payload };
        case "GET_DELIVERIES_BY_DELIVERY_ID":
            return { ...state, deliveries: action.payload };
        case "GET_DELIVERIES_TOTALS_BY_DELIVERY_ID":
            // console.log(action.payload[0])
            return { ...state, totalPricesForDelivery: action.payload[0] };
        case "GET_LAST_DELIVERY_BY_GROUP_CODE":
            return { ...state, lastDelivery: action.payload };
        case "ADD_DELIVERIES_BY_GROUP_CODE":
            return { ...state };
        case "UPDATE_GROUP_DELIVERY_BY_ID":
            return { ...state };
        case "SET_GROUP_DELIVERY_REVENUE":
            return { ...state }
        case "DELETE_DELIVERY_BY_ID":
            return { ...state };

        default:
            return state;


    }
}
