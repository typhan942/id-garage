const testActions = {};

testActions.changeCurrentState = (dispath, data) => {
  dispath({
    type: 'CHANGE_CURRENT_STATE',
    payload: data,
  });
};

testActions.setIndex = (dispath, data) => {
  dispath({
    type: 'SET_INDEX',
    payload: data,
  });
};

export default testActions;
