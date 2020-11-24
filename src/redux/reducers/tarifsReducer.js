import { initState } from '../initialState';

const tarifsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        list: action.payload,
      };
    case 'SET_LIST_INDEX':
      return {
        ...state,
        listIndex: action.payload,
      };
    default:
      return state;
  }
};

export default tarifsReducer;
