import { takeEvery, take, all, put, fork, call, delay } from 'redux-saga/effects';
import * as types from './actionTypes';
import { getUsersApi, deleteUserApi, updateUserApi } from './api';
import { fetchUsersSuccess, fetchUsersFail, deleteUserSuccess, deleteUserFail, updateUserSuccess, updateUserFail } from "./actions";


function* onLoadUsersAsync() {
    try {
        const response = yield call(getUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(fetchUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(fetchUsersFail(error.response.data))
    }
}

function* onDeleteUserAsync(userId) {
    try {
        const response = yield call(deleteUserApi, userId);
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserFail(error.response.data))
    }
}

function* onUpdateUserAsync({ payload: { id, userInfo } }) {
    try {
        const response = yield call(updateUserApi, id, userInfo);
        if (response.status === 200) {
            yield delay(500);
            yield put(updateUserSuccess())
        }
    } catch (error) {
        yield put(updateUserFail(error.response.data))
    }
}

function* onLoadUsers() {
    yield takeEvery(types.FETCH_USERS_START, onLoadUsersAsync);
}


function* onDeleteUser() {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserAsync, userId)
    }
}


function* onUpdateUser() {
    yield takeEvery(types.UPDATE_USER_START, onUpdateUserAsync)
}


const usersSaga = [fork(onLoadUsers), fork(onDeleteUser), fork(onUpdateUser)];

export default function* rootSaga() {
    yield all([...usersSaga]);
}