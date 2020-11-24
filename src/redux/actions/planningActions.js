const planningActions = {};

planningActions.setDataSemaine = (dispath, data) => {
  dispath({
    type: 'SET_DATA_SEMAINE',
    payload: data,
  });
};
planningActions.setCurrentStatus = (dispath, string) => {
  dispath({
    type: 'SET_STATUS',
    payload: string,
  });
};
planningActions.setDayWeek = (dispath, string) => {
  dispath({
    type: 'SET_DAYWEEK',
    payload: string,
  });
};

export default planningActions;
