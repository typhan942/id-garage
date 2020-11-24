// core
import React, { useMemo, useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import allActions from '../../../redux/actions';
import InputPicker from '../../../assets/generic-components/inputPicker';
// data
import { years, months } from '../../../assets/api-data/years';
// styles
import styles from './selectPeriod.style';
import Picker from '../../../assets/generic-components/picker';

const mapStateToProps = ({ languageReducer, invoiceReducer }) => ({
  lg: languageReducer.language,
  invoiceReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setPeriodType: (data) => allActions.invoiceActions.setPeriodType(dispatch, data),
  setYear: (data) => allActions.invoiceActions.setYear(dispatch, data),
  setMonth: (data) => allActions.invoiceActions.setMonth(dispatch, data),
});

/**
 * @desc
 */
const SelectPeriod = ({
  lg, invoiceReducer, setPeriodType, setYear, setMonth,
}) => {
  // static data
  const periodTypes = useMemo(() => [
    {
      label: lg.invoice.selectPeriod.periodType.year,
      value: 'year',
    },
    {
      label: lg.invoice.selectPeriod.periodType.month,
      value: 'month',
    },
  ], [lg]);
  // month with translated labels
  const realMonths = useMemo(() => months.map(({ value, label }) => ({
    value,
    label: lg.month[label],
  })), [months]);

  // state

  const [year, updateYear] = useState(invoiceReducer.year);
  const [month, updateMonth] = useState(invoiceReducer.month);
  const [periodType, updatePeriodType] = useState(invoiceReducer.periodType);
  const onYearChange = (value) => {
    setYear(value); updateYear(value);
  };
  const onMonthChange = (value) => {
    setMonth(value); updateMonth(value)
  }
  const onPeriodTypeChange = (value) => {
    setPeriodType(value); updatePeriodType(value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleSelect}>
        {lg.invoice.selectPeriod.title}
      </Text>
      <View style={styles.main}>
        <View style={styles.periodInputWrap}>
          {invoiceReducer.periodType === 'year'
            && (
            <InputPicker
              items={years}
              value={year}
              onChange={onYearChange}
            />
            )}
          {invoiceReducer.periodType === 'month'
            && (
            <InputPicker
              items={realMonths}
              value={month}
              onChange={onMonthChange}
            />
            )}
        </View>
        <View style={styles.periodTypeInputWrap}>
          <InputPicker
            items={periodTypes}
            value={periodType}
            onChange={onPeriodTypeChange}
          />
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SelectPeriod.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  invoiceReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setPeriodType: PropTypes.func.isRequired,

  setYear: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);
