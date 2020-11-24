import { initState } from '../initialState';

const planningReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_DATA_SEMAINE':
      return {
        ...state,
        dataWeekAPI: action.payload,
      };
    case 'SET_STATUS':
      return {
        ...state,
        currentStatus: action.payload,
      };
    case 'SET_DAYWEEK':
      return {
        ...state,
        weekDayForModifHours: action.payload,
      };
    default:
      return state;
  }
};

export default planningReducer;
