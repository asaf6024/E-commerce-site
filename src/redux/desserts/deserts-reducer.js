import desserts from "../../dist/desserts"

const initialState = {
    desserts: desserts,
    dessert: []
};

export default function desertsReducer(state = initialState, action) {
    // console.log('state is', state)
    switch (action.type) {
        case "GET_DESSERTS":
            return { ...state.desserts };
        case "GET_DESSERT_BY_ID":
            return { ...state, dessert: [state.desserts.find(p => p.id == action.payload)] };
        default:
            return state;

    }
}
