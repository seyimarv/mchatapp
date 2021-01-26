import { combineReducers } from 'redux';
import messageReducer from './Messages/Message.reducer.js';


import userReducer from './user/User.reducer.js'





const rootReducer = combineReducers({
    user: userReducer,
    messages: messageReducer
});
  
export default rootReducer