import {MessageActionTypes} from './Message.types'


 export const setUserMessages = messages => ({
    type: MessageActionTypes.SET_USER_MESSAGES,
    payload: messages
})