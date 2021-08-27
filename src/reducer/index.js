import { combineReducers } from "redux"
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import messageReducer from "./messageReducer";
const reducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    message: messageReducer
});
export default reducer;