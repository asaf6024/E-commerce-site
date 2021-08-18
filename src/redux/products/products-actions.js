
export const getProducts = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_PRODUCTS",
        });
    }
};
export const getProductById = (id) => {
    // console.log('id is', id)
    return (dispatch) => {
        dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: id
        });
    }
};


