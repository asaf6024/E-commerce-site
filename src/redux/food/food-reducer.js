import food from "../../dist/food"

const initialState = {
    food: food,
    foo: []
};

export default function foodReducer(state = initialState, action) {
    // console.log('state is', state)
    switch (action.type) {
        case "GET_FOOD":
            return { ...state.food };
        case "GET_FOOD_BY_ID":
            return { ...state, foo: [state.food.find(p => p.id == action.payload)] };
        default:
            return state;

    }
}
