const tarifsActions = {};

tarifsActions.setList = (dispath, data) => {
  dispath({
    type: 'SET_LIST',
    payload: data,
  });
};

tarifsActions.setListIndex = (dispath, data) => {
  dispath({
    type: 'SET_LIST_INDEX',
    payload: data,
  });
};

export default tarifsActions;
