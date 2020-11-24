const congesActions = {};

congesActions.setDate1 = (dispath, string) => {
  dispath({
    type: 'SET_DATE1',
    payload: string,
  });
};

congesActions.setDate2 = (dispath, string) => {
  dispath({
    type: 'SET_DATE2',
    payload: string,
  });
};

congesActions.setHour1 = (dispath, string) => {
  dispath({
    type: 'SET_HOUR1',
    payload: string,
  });
};

congesActions.setHour2 = (dispath, string) => {
  dispath({
    type: 'SET_HOUR2',
    payload: string,
  });
};

congesActions.setHours = (dispath, string) => {
  dispath({
    type: 'SET_HOURS',
    payload: string,
  });
};

congesActions.setWeekNumber1 = (dispath, string) => {
  dispath({
    type: 'SET_WEEKNUMBER1',
    payload: string,
  });
};

congesActions.setWeekDay1 = (dispath, string) => {
  dispath({
    type: 'SET_WEEKDAY1',
    payload: string,
  });
};

congesActions.setWeekNumber2 = (dispath, string) => {
  dispath({
    type: 'SET_WEEKNUMBER2',
    payload: string,
  });
};

congesActions.setWeekDay2 = (dispath, string) => {
  dispath({
    type: 'SET_WEEKDAY2',
    payload: string,
  });
};

congesActions.setConges = (dispath, array) => {
  dispath({
    type: 'SET_CONGES',
    payload: array,
  });
};

congesActions.setIndex = (dispath, number) => {
  dispath({
    type: 'SET_INDEX',
    payload: number,
  });
};

congesActions.setModifMode = (dispath, number) => {
  dispath({
    type: 'SET_MODIF_MODE',
    payload: number,
  });
};

export default congesActions;
