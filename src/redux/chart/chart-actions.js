
export const get_chart = () => {
    return (dispatch) => {
        console.log('in getChart')
        dispatch({
            type: "GET_CHART"
        });
    }
};
export const get_chart_by_id = (id) => {
    return (dispatch) => {
        dispatch({
            type: "GET_CHART_BY_ID",
            payload: id
        });
    }
};
export const add_to_chart = (product) => {
    // console.log('add', product)
    return (dispatch) => {
        dispatch({
            type: "ADD_TO_CHART",
            payload: product
        });
    }
};
export const update_chart_by_id = (product) => {
    console.log('update function', product)
    alert('Updated successfully')
    return (dispatch) => {
        dispatch({
            type: "UPDATE_CHART_BY_ID",
            payload: product
        });
    }
};
export const delete_chart_by_id = (id) => {
    console.log('dalete', id)
    alert('Deleted from shoping cart')
    return (dispatch) => {
        dispatch({
            type: "DELETE_CHART_BY_ID",
            payload: id
        });
    }
};
export const delete_chart = (id) => {
    alert('Deleted all shoping cart')
    return (dispatch) => {
        dispatch({
            type: "DELETE_CHART",
        });
    }
};




