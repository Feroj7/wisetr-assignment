import * as types from './actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case types.FETCH_USERS_START:
        case types.DELETE_USER_START:
        case types.UPDATE_USER_START:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USERS_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((user => user.id !== action.payload))
            }
        case types.FETCH_USERS_FAIL:
        case types.DELETE_USER_FAIL:
        case types.UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export { usersReducer };