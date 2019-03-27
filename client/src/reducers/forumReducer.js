import * as TYPES from "../actions/actionTypes";

const defaultState = {
  posts: [],
  selectedPost: {},
  isLoading: false
};

const forumReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.FETCH_POST_REQUEST:
      return {...state, isLoading: true}
    case TYPES.FETCH_POST_SUCCEESS:
      return {...state, isLoading: false, selectedPost: action.post}
    case TYPES.FETCH_POST_ERROR:
      return {...state, isLoading: false, selectedPost: {}}
    case TYPES.FETCH_POSTS_REQUEST:
      return {...state, isLoading: true}
    case TYPES.FETCH_POSTS_SUCCEESS: 
      return {...state, isLoading: false, posts: action.posts}
    case TYPES.CREATE_POST_REQUEST: 
      return {...state, isLoading:true}
    case TYPES.CREATE_POST_SUCCESS: 
      return {...state, isLoading: false}
    case TYPES.CREATE_POST_ERROR:
      return {...state, isLoading: false}
    default:
      return state;
  }
};

export default forumReducer;
