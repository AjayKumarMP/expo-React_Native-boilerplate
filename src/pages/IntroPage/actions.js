import {INIT_CALL, GET_USER_DETAILS} from './constants'

export const init = () => ({
    type: INIT_CALL,
});

export const getUserDetails = () => ({
    type: GET_USER_DETAILS,
});