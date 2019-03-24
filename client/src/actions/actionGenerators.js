import * as TYPES from './actionTypes';
import axios from 'axios';

export const register = (user) => {
    return dispatch => {
        dispatch(registerRequest())
        axios.post('/api/auth/register', user).then(res => {
            console.log(res.data)
            if(res.data.success) {
                dispatch(registerSuccess(user))
                dispatch(login(user))
            }
            else dispatch(registerError())
        })
    }
}
export const registerRequest = () => {
    return {
        type: TYPES.REGISTER_USER_REQUEST,
    }
}
export const registerSuccess = user => {
    return {
        type: TYPES.REGISTER_USER_SUCCESS,
        user: user.username
    }
}
export const registerError = () => {
    return {
        type: TYPES.REGISTER_USER_ERROR
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch(loginRequest())
        axios.post('/api/auth/login', user).then(res => {
            console.log(res.data)
            if(res.data.success) dispatch(loginSuccess(user.username))
            else dispatch(loginError())
        })
    }
}
export const loginRequest =() => {
    return {
        type: TYPES.LOGIN_USER_REQUEST,
    }
}
export const loginSuccess = (username) => {
    return {
        type: TYPES.LOGIN_USER_SUCCESS,
        username
    }
}
export const loginError = () => {
    return {
        type: TYPES.LOGIN_USER_ERROR,
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutRequest());
        axios.get('/api/auth/logout').then(res => {
            console.log(res.data);
            if (res.data.success) dispatch(logoutSuccess())
            else dispatch(logoutError())
        })
    }
}

export const logoutRequest = () => {
    return {
        type: TYPES.LOGOUT_USER_REQUEST
    }
}
export const logoutSuccess = () => {
    return {
        type: TYPES.LOGOUT_USER_SUCCESS
    }
}
export const logoutError = () => {
    return {
        type: TYPES.LOGOUT_USER_ERROR
    }
}