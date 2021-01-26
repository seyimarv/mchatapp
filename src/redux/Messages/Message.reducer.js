import {MessageActionTypes} from './Message.types'


const INITIAL_STATE = {
    currentUserMessages: []
}

const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
     case MessageActionTypes.SET_USER_MESSAGES:
        return {
            ...state,
            currentUserMessages: action.payload
        }
        default:
        return  state;

    }

}

export default messageReducer;