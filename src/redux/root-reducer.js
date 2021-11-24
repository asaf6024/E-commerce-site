import { combineReducers } from "redux";
import productsReducer from './products/products-reducer'
import chartReducer from './chart/chart-reducer'
import foodReducer from "./food/food-reducer";
import desertsReducer from "./desserts/deserts-reducer";

const rootReducer = combineReducers({
    productsReducer,
    foodReducer,
    desertsReducer,
    chartReducer
});

export default rootReducer;
