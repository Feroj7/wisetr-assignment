import * as types from './actionTypes';

export const fetchUsersStart = () => ({
    type: types.FETCH_USERS_START
});

export const fetchUsersSuccess = (users) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFail = (error) => ({
    type: types.FETCH_USERS_FAIL,
    payload: error
});

export const deleteUserStart = (userId) => ({
    type: types.DELETE_USER_START,
    payload: userId
});

export const deleteUserSuccess = (userId) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userId
});
export const deleteUserFail = (error) => ({
    type: types.DELETE_USER_FAIL,
    payload: error
});

export const updateUserStart = (userInfo) => ({
    type: types.UPDATE_USER_START,
    payload: userInfo
});

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS
});

export const updateUserFail = (error) => ({
    type: types.UPDATE_USER_FAIL,
    payload: error
});