const invoiceAction = {};

invoiceAction.setPeriodType = (dispath, data) => {
  dispath({
    type: 'SET_PERIOD_TYPE',
    payload: data,
  });
};

invoiceAction.setMonth = (dispath, data) => {
  dispath({
    type: 'SET_MONTH',
    payload: data,
  });
};

invoiceAction.setYear = (dispath, data) => {
  dispath({
    type: 'SET_YEAR',
    payload: data,
  });
};

export default invoiceAction;
