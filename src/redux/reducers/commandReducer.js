import { initState } from '../initialState';

const commandReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ORDER':
      return {
        ...state,
        currentCommand: action.payload,
      };
    case 'SET_INDEXES':
      return {
        ...state,
        idxs: action.payload,
      };
    case 'SET_NOTE':
      return {
        ...state,
        note: action.payload,
      };
    default:
      return state;
  }
};

export default commandReducer;
