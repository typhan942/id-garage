const commandActions = {};

commandActions.setCurrentOrder = (dispath, data) => {
  dispath({
    type: 'SET_CURRENT_ORDER',
    payload: data,
  });
};
commandActions.setIndexes = (dispath, data) => {
  dispath({
    type: 'SET_INDEXES',
    payload: data,
  });
};

commandActions.setNote = (dispath, data) => {
  dispath({
    type: 'SET_NOTE',
    payload: data,
  });
};

export default commandActions;
