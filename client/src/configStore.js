import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const configStore = () => createStore(
  combineReducers({
    userReducer
  }), applyMiddleware(thunk)
)

export default configStore;