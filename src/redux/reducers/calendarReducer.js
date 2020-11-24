import { initState } from '../initialState';

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_CALENDAR':
      return {
        ...state,
        calendarOpened: action.payload,
      };
    case 'DATETIME':
      return {
        ...state,
        date: action.payload,
      };
    case 'ACTIVE_DAY_WEEK':
      return {
        ...state,
        activeWeek: action.payload,
        activeDay: !action.payload,
      };
    case 'SET_COMMAND':
      return {
        ...state,
        dataForCommand: action.payload,
      };
    case 'SET_DEVIS_DATA':
      return {
        ...state,
        devisData: action.payload,
      };
    case 'SET_DEVIS_DATA_DETAILS':
      return {
        ...state,
        devisDataDetails: action.payload,
      };
    case 'SET_ALL_DATA':
      return {
        ...state,
        allData: action.payload,
      };
    case 'SET_DAY_INDEX':
      return {
        ...state,
        dayIndex: action.payload,
      };
    case 'SET_DAYS_IN_MONTH':
      return {
        ...state,
        daysInMonth: action.payload,
      };
    case 'SET_SCROLL_DAY':
      return {
        ...state,
        scrollWeek: action.payload,
      };
    case 'SET_SCROLL_WEEKDAY':
      return {
        ...state,
        scrollWeekDay: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
