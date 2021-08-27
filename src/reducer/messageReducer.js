import * as message from './../constants/message'
import * as actionsType from './../constants/index'
const initialState = message.MSG_WELCOME;
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_MESSAGE: {
            state = action.message
        }
        default: return state;
    }
}
export default messageReducer;