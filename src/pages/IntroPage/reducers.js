import { INIT_CALL, GET_USER_DETAILS, USER_FETCH_SUCCESS } from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_CALL:
      return { ...state, loading: true };
    case GET_USER_DETAILS:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// export const getUserDetails = (state) => state.user;
