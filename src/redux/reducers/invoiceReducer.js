import { initState } from '../initialState';

const invoiceReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PERIOD_TYPE':
      return {
        ...state,
        periodType: action.payload,
      };
    case 'SET_YEAR':
      return {
        ...state,
        year: action.payload,
      };
    case 'SET_MONTH':
      return {
        ...state,
        month: action.payload,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
