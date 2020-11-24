const statusActions = {};

statusActions.setValid = (dispath, data) => {
  dispath({
    type: 'VALID',
    payload: data,
  });
};
statusActions.setCanceled = (dispath, data) => {
  dispath({
    type: 'CANCELED',
    payload: data,
  });
};
statusActions.setToValidate = (dispath, data) => {
  dispath({
    type: 'TO_VALIDATE',
    payload: data,
  });
};
statusActions.setProblems = (dispath, data) => {
  dispath({
    type: 'PROBLEMS',
    payload: data,
  });
};
statusActions.setWeekNumber = (dispath, data) => {
  dispath({
    type: 'WEEK_NUMBER',
    payload: data,
  });
};
export default statusActions;
