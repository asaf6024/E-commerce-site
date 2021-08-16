
let cartFromStorage = JSON.parse(localStorage.getItem('cart'))
const initialState = {
    chart: cartFromStorage != null ? cartFromStorage : []
};

export default function (state = initialState, action) {
    console.log('state', state)
    switch (action.type) {
        case "GET_CHART":
            return { ...state };
        case "GET_CHART_BY_ID":
            // return { ...state.chart.forEach(c => c.id == action.payload) }
            // return { ...state, chart: state.chart.filter(c => c.id == action.payload) }
            return {
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                chart: state.chart.map(todo => {
                    // If this isn't the todo item we're looking for, leave it alone
                    if (todo.id !== action.payload) {
                        return todo
                    }

                    // We've found the todo that has to change. Return a copy:
                    return {
                        ...todo,
                    }
                })
            };

        case "ADD_TO_CHART":
            return {
                ...state,
                chart: state.chart.concat(action.payload)
            };
        case "UPDATE_CHART_BY_ID":
            return {
                ...state,
                chart: state.chart.forEach((item) => item.id == action.payload[0].id ? item = action.payload[0] : item)
            };

        // return {
        //     ...state,
        //     chart: state.chart.map(data => {
        //         console.log('in', action.payload)

        //         if (data.id == action.payload[0].id) {
        //             return action.payload[0];
        //         }
        //     }
        //     )
        // }


        case "DELETE_CHART_BY_ID":
            return { ...state, chart: state.chart.filter(c => c.id != action.payload) };
        case "DELETE_CHART":
            return { ...state, chart: [] };
        default:
            return state;


    }
}
