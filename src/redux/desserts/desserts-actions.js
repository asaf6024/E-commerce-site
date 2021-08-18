
export const getDesserts = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_DESSERTS",
        });
    }
};
export const getDessertById = (id) => {
    // console.log('id is', id)
    return (dispatch) => {
        dispatch({
            type: "GET_DESSERT_BY_ID",
            payload: id
        });
    }
};


