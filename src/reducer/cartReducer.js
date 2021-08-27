import Utils from '../Utils';
import * as actionsType from './../constants/index'
var data = JSON.parse(localStorage.getItem('CART'));
const initialState = data ?? [];
const cartReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case actionsType.ADD_TO_CART: {
            addCartToDB(action.product, action.quantity, state);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case actionsType.DELETE_CART: {
            index = Utils.findIndexByValue(state, 'id', action.id);
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case actionsType.UPDATE_CART: {
            state.filter((item) => {
                return item.product.id === action.id;
            }).map(item => { if (action.currentQuantity >= 0) item.quantity = action.currentQuantity });
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        default: return [...state];
    }
}
var addCartToDB = (product, quantity, state) => {
    var item = state.filter((item) => item.product.id === product.id);
    if (item.length > 0) {
        item[0].quantity += quantity;
    } else {
        state.push({
            product,
            quantity
        })
    }
}
export default cartReducer;