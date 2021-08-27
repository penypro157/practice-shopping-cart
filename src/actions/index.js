import * as actionTypes from './../constants/index'
export const addToCart = (product, quantity) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) => {
    return {
        type: actionTypes.CHANGE_MESSAGE,
        message
    }
}
export const deleteCart = (id) => {
    return {
        type: actionTypes.DELETE_CART,
        id
    }
}
export const updateCart = (id, currentQuantity) => {
    return {
        type: actionTypes.UPDATE_CART,
        id,
        currentQuantity
    }
}