import * as TYPES from "./actionTypes";
import axios from "axios";

export const fetchPost = (id) => {
  return dispatch => {
    dispatch(fetchPostRequest())
    return axios.get('/api/posts/' + id).then(res => {
      if(res.data.success) {
        dispatch(fetchPostSuccess(res.data.payload))
        return {success: true}
      }
      else {
        dispatch(fetchPostError())
        return {success: false}
      }
    }).catch(err => {
      dispatch(fetchPostError())
        return {success: false}
    })
  }
}

export const fetchPostSuccess = (post) => {
  return {
    type:TYPES.FETCH_POST_SUCCEESS,
    post
  }
}
export const fetchPostRequest = () => {
  return {
    type:TYPES.FETCH_POST_REQUEST,
  }
}
export const fetchPostError = () => {
  return {
    type:TYPES.FETCH_POST_ERROR,
  }
}

export const fetchPosts = () => {
  return dispatch => {
    return axios
      .get("/api/posts")
      .then(res => {
        console.log(res.data);
        if (res.data.success) {
          dispatch(fetchPostsSuccess(res.data.payload));
          return { success: true };
        } else {
          dispatch(fetchPostsError());
          return { success: false };
        }
      })
      .catch(dispatch(fetchPostsError()));
  };
};
export const fetchPostsRequest = () => {
  return {
    type: TYPES.FETCH_POSTS_REQUEST
  };
};
export const fetchPostsSuccess = posts => {
  return {
    type: TYPES.FETCH_POSTS_SUCCEESS,
    posts
  };
};
export const fetchPostsError = () => {
  return {
    type: TYPES.FETCH_POSTS_ERROR
  };
};
export const createPost = post => {
  return dispatch => {
    dispatch(createPostRequest())
    return axios.post("/api/posts", post).then(res => {
      console.log(res);
      if (res.success) {
        dispatch(createPostSuccess(post));
        return "success!";
      } else {
        dispatch(createPostError());
        return "errror!";
      }
    });
  };
};

export const createPostRequest = () => {
  return {
    type: TYPES.CREATE_POST_REQUEST,
  };
};

export const createPostSuccess = post => {
  return {
    type: TYPES.CREATE_POST_SUCCESS,
    post
  };
};

export const createPostError = () => {
  return {
    type: TYPES.CREATE_POST_ERROR
  };
};

export const register = user => {
  return dispatch => {
    dispatch(registerRequest());
    return axios.post("/api/auth/register", user).then(res => {
      console.log(res.data);
      if (res.data.success) {
        dispatch(registerSuccess(user));
        dispatch(login(user));
      } else {
        dispatch(registerError());
        return res.data.message;
      }
    });
  };
};
export const registerRequest = () => {
  return {
    type: TYPES.REGISTER_USER_REQUEST
  };
};
export const registerSuccess = user => {
  return {
    type: TYPES.REGISTER_USER_SUCCESS,
    user: user.username
  };
};
export const registerError = () => {
  return {
    type: TYPES.REGISTER_USER_ERROR
  };
};

export const login = user => {
  let errMsg = "fuck";
  return dispatch => {
    dispatch(loginRequest());
    return axios.post("/api/auth/login", user).then(res => {
      console.log(res.data);
      if (res.data.success) dispatch(loginSuccess(user.username));
      else {
        dispatch(loginError());
        errMsg = res.data.message;
        return errMsg;
      }
    });
  };
};
export const loginRequest = () => {
  return {
    type: TYPES.LOGIN_USER_REQUEST
  };
};
export const loginSuccess = username => {
  return {
    type: TYPES.LOGIN_USER_SUCCESS,
    username
  };
};
export const loginError = () => {
  return {
    type: TYPES.LOGIN_USER_ERROR
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());
    axios.get("/api/auth/logout").then(res => {
      console.log(res.data);
      if (res.data.success) dispatch(logoutSuccess());
      else dispatch(logoutError());
    });
  };
};

export const logoutRequest = () => {
  return {
    type: TYPES.LOGOUT_USER_REQUEST
  };
};
export const logoutSuccess = () => {
  return {
    type: TYPES.LOGOUT_USER_SUCCESS
  };
};
export const logoutError = () => {
  return {
    type: TYPES.LOGOUT_USER_ERROR
  };
};
