import { initState } from '../initialState';

const congesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_DATE1':
      return {
        ...state,
        date1: action.payload,
      };
    case 'SET_DATE2':
      return {
        ...state,
        date2: action.payload,
      };
    case 'SET_HOUR1':
      return {
        ...state,
        hour1: action.payload,
      };
    case 'SET_HOUR2':
      return {
        ...state,
        hour2: action.payload,
      };
    case 'SET_HOURS':
      return {
        ...state,
        hours: action.payload,
      };
    case 'SET_WEEKNUMBER1':
      return {
        ...state,
        weekNumber1: action.payload,
      };
    case 'SET_WEEKDAY1':
      return {
        ...state,
        weekDay1: action.payload,
      };
    case 'SET_WEEKNUMBER2':
      return {
        ...state,
        weekNumber2: action.payload,
      };
    case 'SET_WEEKDAY2':
      return {
        ...state,
        weekDay2: action.payload,
      };
    case 'SET_CONGES':
      return {
        ...state,
        conges: action.payload,
      };
    case 'SET_INDEX':
      return {
        ...state,
        index: action.payload,
      };
    case 'SET_MODIF_MODE':
      return {
        ...state,
        modif: action.payload,
      };

    default:
      return state;
  }
};

export default congesReducer;
