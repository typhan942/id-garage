import { initState } from '../initialState';

const statisticsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_YEARS':
      return {
        ...state,
        year: action.payload,
      };
    case 'SET_MONTH':
      return {
        ...state,
        month: action.payload,
      };
    case 'SET_NETWORK':
      return {
        ...state,
        network: action.payload,
      };
    case 'SET_VISIBILITY_DATA':
      return {
        ...state,
        visibilityData: action.payload,
      };
    case 'SET_SALES_DATA':
      return {
        ...state,
        salesData: action.payload,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
