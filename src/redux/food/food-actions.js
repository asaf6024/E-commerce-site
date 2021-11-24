
export const getFood = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_FOOD",
        });
    }
};
export const getFoodById = (id) => {
    return (dispatch) => {
        dispatch({
            type: "GET_FOOD_BY_ID",
            payload: id
        });
    }
};


