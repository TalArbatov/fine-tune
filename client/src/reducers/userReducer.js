import * as TYPES from '../actions/actionTypes';

const defaultState = {
  isLoading: false,
  authenticated: false,
  username: '' 
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TYPES.REGISTER_USER_REQUEST:
      return {...state, isLoading: true}
    case TYPES.REGISTER_USER_SUCCESS:
      return {...state, isLoading: false}
    case TYPES.REGISTER_USER_ERROR:
      return {...state, authenticated: false}
    case TYPES.LOGIN_USER_REQUEST:
      return {...state, isLoading: true}
    case TYPES.LOGIN_USER_SUCCESS:
      return  {isLoading: false, authenticated: true, username: action.username}
    case TYPES.LOGIN_USER_ERROR:
      return {...state, isLoading: false, authenticated: false}
    case TYPES.LOGOUT_USER_REQUEST:
      return {...state, isLoading: true}
    case TYPES.LOGOUT_USER_SUCCESS:
      return {...state, isLoading: false, authenticated: false, username: ''}
    case TYPES.LOGOUT_USER_ERROR:
      return {...state, isLoading: false}
    default:
      return state;
  }
}

export default userReducer;