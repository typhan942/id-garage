import { initState } from '../initialState';

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case 'VALID':
      return {
        ...state,
        valid: action.payload,
      };
    case 'CANCELED':
      return {
        ...state,
        canceled: action.payload,
      };
    case 'TO_VALIDATE':
      return {
        ...state,
        toValidate: action.payload,
      };
    case 'PROBLEMS':
      return {
        ...state,
        problems: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
