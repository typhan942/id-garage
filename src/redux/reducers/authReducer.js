import { initState } from '../initialState';

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        userToken: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        userToken: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
