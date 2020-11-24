const statisticActions = {};

statisticActions.setYears = (dispath, data) => {
  dispath({
    type: 'SET_YEARS',
    payload: data,
  });
};

statisticActions.setMonth = (dispath, data) => {
  dispath({
    type: 'SET_MONTH',
    payload: data,
  });
};

statisticActions.setNetworkIndex = (dispath, data) => {
  dispath({
    type: 'SET_NETWORK',
    payload: data,
  });
};

statisticActions.setVisibilityData = (dispath, data) => {
  dispath({
    type: 'SET_VISIBILITY_DATA',
    payload: data,
  });
};

statisticActions.setSalesData = (dispath, data) => {
  dispath({
    type: 'SET_SALES_DATA',
    payload: data,
  });
};

export default statisticActions;
