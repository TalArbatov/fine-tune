import * as TYPES from '../actions/actionTypes';

const defaultState = {
  isLoading: false,
  authenticated: false,
  email: '' 
};

const userReducer = (state = defaultState, action) => {
  switch(action.state) {
    default:
      return state;
  }
}

export default userReducer;