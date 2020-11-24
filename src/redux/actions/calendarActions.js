const calendarActions = {};

calendarActions.showCalendar = (dispath, data) => {
  dispath({
    type: 'SHOW_CALENDAR',
    payload: data,
  });
};
calendarActions.setWeekDayMonthYear = (dispath, data) => {
  dispath({
    type: 'SET_CALENDAR_ITEM',
    payload: data,
  });
};
calendarActions.setDate = (dispath, data) => {
  dispath({
    type: 'DATETIME',
    payload: data,
  });
};
calendarActions.setActive = (dispath, bool) => {
  dispath({
    type: 'ACTIVE_DAY_WEEK',
    payload: bool,
  });
};
calendarActions.setDataForCommand = (dispath, string) => {
  dispath({
    type: 'SET_COMMAND',
    payload: string,
  });
};
calendarActions.setDevisData = (dispath, data) => {
  dispath({
    type: 'SET_DEVIS_DATA',
    payload: data,
  });
};
calendarActions.setDevisDataDetails = (dispath, data) => {
  dispath({
    type: 'SET_DEVIS_DATA_DETAILS',
    payload: data,
  });
};
calendarActions.setAllData = (dispath, data) => {
  dispath({
    type: 'SET_ALL_DATA',
    payload: data,
  });
};
calendarActions.setDayIndex = (dispath, data) => {
  dispath({
    type: 'SET_DAY_INDEX',
    payload: data,
  });
};
calendarActions.setDaysInMonth = (dispath, data) => {
  dispath({
    type: 'SET_DAYS_IN_MONTH',
    payload: data,
  });
};
calendarActions.setScrollIndex = (dispath, data) => {
  dispath({
    type: 'SET_SCROLL_DAY',
    payload: data,
  });
};
calendarActions.setScrollWeekDay = (dispath, data) => {
  dispath({
    type: 'SET_SCROLL_WEEKDAY',
    payload: data,
  });
};
export default calendarActions;
