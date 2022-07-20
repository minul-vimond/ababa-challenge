import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const RootReducer = combineReducers({
  user: userReducer
});

export default RootReducer;
